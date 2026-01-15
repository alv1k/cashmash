import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const newUser = await prisma.user.create({
        data: {
            email: 'test#example.com',
            name: 'Test John',
        },
    });
    console.log('User created:', newUser);

    const user = await prisma.user.findUnique({
        where: {
            email: 'test@example.com',
        },
    });
    console.log('User found:' , user);

    const updatedUser = await prisma.user.update({
        where: {
            email: 'test@example.com',
        },
        data: {
            name: 'Updated John',
        },
    });
    console.log('Updated name:', updatedUser);
    
    const deletedUser = await prisma.user.delete({
        where: {
            email: 'test@example.com',
        },
    });
    console.log('User deleted:', deletedUser);

    
    main()
        .then(async () => {
            await prisma.$disconnect();
        })
        .catch( async (e) => {
            console.error(e);
            await prisma.$disconnect();
            process.exit(1); 
        });
    
}