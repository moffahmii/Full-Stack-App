const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.item.deleteMany();

  await prisma.item.createMany({
    data: [
      { name: 'Wireless Mouse', category: 'Electronics' },
      { name: 'Mechanical Keyboard', category: 'Electronics' },
      { name: 'Coffee Mug', category: 'Accessories' },
      { name: 'Desk Pad', category: 'Workspace' },
      { name: 'Ultra-wide Monitor', category: 'Electronics' },
      { name: 'Noise Cancelling Headphones', category: 'Audio' },
      { name: 'Ergonomic Chair', category: 'Furniture' },
      { name: 'Standing Desk', category: 'Furniture' },
      { name: 'MacBook Pro M3', category: 'Computers' },
      { name: 'USB-C Hub', category: 'Accessories' },
      { name: 'Webcam 4K', category: 'Electronics' },
      { name: 'Blue Yeti Microphone', category: 'Audio' },
    ],
  });
  console.log("More data inserted successfully!");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());