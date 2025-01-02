import { supabase } from '../../lib/superbaseClient';
import Link from 'next/link';

async function getCompanies() {
    
    const { data: companies, error } = await supabase.from('company').select('*');

    if (error) {
        console.error('Error fetching companies:', error);
        return [];
    }

    return companies;
}

export default async function HomePage() {
    const companies = await getCompanies();

    return (
        <div>
            <h1>Company List</h1>
            <ul>
                {companies.map((company) => (
                    <li key={company.id}>
                        <Link href={`/post/${company.id}`}>
                            {company.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
