import { NextResponse } from "next/server";
import { prisma } from "@/db";

export async function GET(req: Request) {
    // Fetch all data from the database. Adjust "yourTableName" to your actual table name.
    const data = await prisma.qna.findUnique({
        where: {
          id: "1",
        },
      })
  
    // Return the fetched data as JSON
    return NextResponse.json(data, { status: 200 });
  }