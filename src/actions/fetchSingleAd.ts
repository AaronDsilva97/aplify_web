"use server";

export async function getAdDetails(id: string) {
  try {
    const res = await fetch(
      `https://api.aplify.in/advertisements/fetchSingleAd?ad_id=${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}
