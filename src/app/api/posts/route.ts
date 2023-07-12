import { connectDB } from "@/libs/mongodb";
import Post from "@/models/post"
import { NextResponse } from "next/server";
import mongoose from "mongoose";


/*
export async function POST(request: Request, response: Response) {
    try {

        await connectDB();

        const { title, text, category, image } = await request.json()

        const postFound = await Post.findOne({ title })

        if (postFound)
            return NextResponse.json(
                {
                    message: "Post already exists",
                },
                {
                    status: 409,
                }
            );

        const post = new Post({
            title,
            text,
            category,
            image
        })
        
        const savedPost = await post.save()

        return NextResponse.json(
            {
                title,
                text,
                category,
                image,
                createdAt: savedPost.createdAt,
                updatedAt: savedPost.updatedAt,
            },
            { status: 201 }
        );

    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            return NextResponse.json(
                {
                    message: error.message,
                },
                {
                    status: 400,
                }
            );
        }
        
        return NextResponse.error();
    }
}
*/

export async function GET() {
    await connectDB();
    const posts = await Post.find();
    return NextResponse.json({ posts });
}

export async function POST(request: Request, response: Response) {
    try {
        await connectDB();

        const { title, text, category, image } = await request.json()

        const postFound = await Post.findOne({ title })

        if (postFound)
            return NextResponse.json(
                {
                    message: "Post already exists",
                },
                {
                    status: 409,
                }
            );

        const post = new Post({
            title,
            text,
            category,
            image
        })
        
        const savedPost = await post.save()

        return NextResponse.json(
            {
                title,
                text,
                category,
                image,
                createdAt: savedPost.createdAt,
                updatedAt: savedPost.updatedAt,
            },
            { status: 201 }
        );

        

    } catch (err) {
       console.log(err);

        return NextResponse.error();
    }
}