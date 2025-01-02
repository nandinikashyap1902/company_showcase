import { supabase } from "../../../../lib/superbaseClient";

async function getCompany(id) {
    
    const { data: company, error } = await supabase
        .from('company')
        .select('*, directors(*)') 
        .eq('id', id)
        .single(); 

    if (error) {
        console.error('Error fetching company:', error);
        throw new Error('Company not found');
    }

    return company;
}

export default async function CompanyPage({ params }) {
    const { id } = await params; 
    const company = await getCompany(id);

    return (
        <div>
            <h1>{company.name}</h1>
            <p>{company.details}</p>
            <h2>Directors</h2>
            <ul>
                {company.directors.map((director) => (
                    <li key={director.id}>{director.name}</li>
                ))}
            </ul>
        </div>
    );
}
