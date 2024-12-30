import prisma from "../../../../prisma/prisma";

async function getCompany(id) {
    const company = await prisma.company.findUnique({
        where: { id: parseInt(id) },
        include: { directors: true }, // Fetch related directors
    });

    if (!company) {
        throw new Error('Company not found');
    }

    return company;
}

export default async function CompanyPage({ params }) {
    const { id } =  params ; // Extract the dynamic `id` from the URL
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
