import dbconnect from "../../../lib/dbconnect";

export async function GET() {
    const data = await dbconnect("farhan").find({}).toArray();


    return Response.json({ data })
}   

export async function POST(req) {
    const postdata = await req.json(); 
    const data = await dbconnect("farhan").insertOne(postdata);
  
    return Response.json({ data });
  }
  