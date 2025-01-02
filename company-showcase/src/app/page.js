import prisma from '../../prisma/prisma';
import Link from 'next/link';
async function getCompanies() {
    // Fetch data from the database using Prisma
    const companies = await prisma.company.findMany();
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
