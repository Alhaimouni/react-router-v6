import React from "react";
import { deleteContact } from "../contacts";
import { redirect } from "react-router-dom";


export async function action({ params, request }) {
  // throw new Error("oh dang!");
  await deleteContact(params.contactId);
  return redirect("/");
}

function Destroy() {
  return <div>destroy</div>;
}

export default Destroy;
