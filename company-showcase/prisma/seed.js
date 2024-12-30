const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.company.createMany({
    data: [
      { name: 'Company A', details: 'Details about Company A' },
      { name: 'Company B', details: 'Details about Company B' },
      { name: 'Company C', details: 'Details about Company C' },
    ],
  });

  const companies = await prisma.company.findMany();

  await prisma.director.createMany({
    data: [
      { name: 'Director 1', companyId: companies[0].id },
      { name: 'Director 2', companyId: companies[0].id },
      { name: 'Director 3', companyId: companies[1].id },
      { name: 'Director 4', companyId: companies[1].id },
      { name: 'Director 5', companyId: companies[2].id },
    ],
  });
}

main().catch((e) => console.error(e)).finally(() => prisma.$disconnect());
