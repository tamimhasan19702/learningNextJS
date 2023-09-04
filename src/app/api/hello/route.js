export async function GET(request) {
    const data = {
        message: "hello tamim hasan"
    };

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}
