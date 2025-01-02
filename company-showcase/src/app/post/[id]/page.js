import { supabase } from '../../../../lib/supabaseClient';

async function getCompany(id) {
    // Fetch the company with its related directors from Supabase
    const { data: company, error } = await supabase
        .from('company')
        .select('*, directors(*)') // Include related directors
        .eq('id', id)
        .single(); // Fetch a single company by ID

    if (error) {
        console.error('Error fetching company:', error);
        throw new Error('Company not found');
    }

    return company;
}

export default async function CompanyPage({ params }) {
    const { id } = await params; // Extract the dynamic `id` from the URL
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
