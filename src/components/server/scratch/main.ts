"use server";

export async function ScratchAPI_Status(studiosId: number): Promise<any> {
  const res = await fetch(`https://api.scratch.mit.edu/studios/${studiosId}`);
  const data = await res.json();
  return data;
}
