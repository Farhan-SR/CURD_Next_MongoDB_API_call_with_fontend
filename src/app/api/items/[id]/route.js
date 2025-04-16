import { ObjectId } from "mongodb";
import dbconnect from "../../../../lib/dbconnect";
import { isSet } from "util/types";

export async function GET(req,{params}) {
   const p = await params ;
   const singledata = await dbconnect("farhan").findOne({_id : new ObjectId(p.id)});
    return Response.json(singledata);
}  

export async function DELETE(req,{params}) {
    const p = await params ;
    const deletedata = await dbconnect("farhan").deleteOne({_id : new ObjectId(p.id)});
     return Response.json(deletedata);
 } 

 
 export async function PATCH(req, { params }) {
   const { id } = params;
   const posteddata = await req.json();
 
   const filter = { _id: new ObjectId(id) };
 
   const result = await dbconnect("farhan").updateOne(
     filter,
     { $set: posteddata },
     { upsert: true }
   );
 
 
   return Response.json({
     modifiedCount: result.modifiedCount,
     matchedCount: result.matchedCount,
     upsertedId: result.upsertedId || null,
   });
 }


 
//  my func  
//  export async function PATCH(req,{params}) {
//     const p = await params ;
//     const posteddata = await req.json();
//     const  filter = {_id : new ObjectId(p.id)}
//     const updateded_data = await dbconnect("farhan").updateOne(filter,{$set : posteddata   },{upsert : true});
//      return Response.json(updateded_data);
//  }   