import type { ProjectCreateInput } from "@shelve/types";
import prisma from "~/server/database/client";

export async function upsertProject(project: ProjectCreateInput) {
  await removeCachedUserProjects(project.ownerId.toString());
  return prisma.project.upsert({
    where: {
      id: project.id || -1,
    },
    create: project,
    update: project,
  });
}

export async function getProjectById(id: number) {
  return prisma.project.findUnique({
    where: {
      id,
    },
  });
}

export async function getProjectsByUserId(userId: number) {
  return prisma.project.findMany({
    where: {
      OR: [
        {
          ownerId: userId,
        },
        {
          users: {
            some: {
              id: userId,
            },
          }
        },
      ],
    },
    orderBy: {
      updatedAt: "asc",
    }
  });
}

async function removeCachedUserProjects(userId: string) {
  return await useStorage('cache').removeItem(`nitro:functions:getProjectsByUserId:userId:${userId}.json`);
}

export async function deleteProject(id: number) {
  return prisma.project.delete({
    where: {
      id,
    },
  });
}
