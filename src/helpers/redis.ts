const upstashRedisRestUrl = process.env.UPSTASH_REDIS_REST_URL;
const authToken = process.env.UPSTASH_REDIS_REST_TOKEN;

type Command = "zrange" | "sismember" | "get" | "smembers" | "set" | "zadd";

export async function fetchRedis(
  command: Command,
  ...args: (string | number)[]
) {
  const commandUrl = `${upstashRedisRestUrl}/${command}/${args.join("/")}`;

  const response = await fetch(commandUrl, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Error executing Redis command: ${response.statusText}`);
  }

  const data = await response.json();
  return data.result;
}


 // await fetchRedis(
      //   "set",
      //   `user:${doctor._id}`,
      //   JSON.stringify({
      //     id: doctor._id,
      //     email: doctor.email,
      //     emailVerified: true,
      //     name: doctor.name,
      //     image:
      //       "https://static.vecteezy.com/system/resources/previews/004/201/722/original/online-doctor-physician-professional-with-stethoscope-consultant-medical-protection-covid-19-flat-style-icon-free-vector.jpg",
      //   })
      // );

      // await fetchRedis(
      //   "set",
      //   `user:email:${doctor.email}`,
      //   JSON.stringify(doctor._id)
      // );