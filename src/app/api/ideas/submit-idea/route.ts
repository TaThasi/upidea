import connectMongoDB from "@/app/lib/mongodb";
import { NextResponse } from 'next/server';
import IdeaInfoModel , { IdeaInfo } from "@/app/models/IdeaInfo";

export async function handler(req: Request) {
    try {
        if(req.method !== "POST") {
            return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), {
                headers: {
                  "Content-Type": "application/json",
                },
                status: 500,
            }); 
            
        }
        await connectMongoDB();

        const body: IdeaInfo = await req.json(); 

        const newIdeaInfo = new IdeaInfoModel(body);
        await newIdeaInfo.save();

        return new NextResponse(JSON.stringify({ success: "Idea saved successfully"}),
            {
                headers: {
                  "Content-Type": "application/json",
                },
                status: 200,
            }
        )
    } catch (err) {
        console.error(err);
        return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), {
            headers: {
              "Content-Type": "application/json",
            },
            status: 500,
          });
    }
}