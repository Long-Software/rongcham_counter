import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Delete all existing data (optional, for idempotent seed)
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();

  // Create users
  const user1 = await prisma.user.create({
    data: {
      email: 'alice@example.com',
      name: 'Alice',
      posts: {
        create: [
          { title: 'Hello World', content: 'This is my first post!', published: true },
          { title: 'Second Post', content: 'Prisma is awesome!', published: false },
        ],
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'bob@example.com',
      name: 'Bob',
      posts: {
        create: [
          { title: 'Greetings', content: 'Just saying hello!', published: true },
        ],
      },
    },
  });

  console.log({ user1, user2 });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
