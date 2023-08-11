export const post = async ({ request }) => {
    const body = await request.formData();
    const name = body.get('name');
    const email = body.get('email');
    const message = body.get('message');

    const response = await fetch(`URL TO RELEVANT GOOGLE FORM GOES HERE`);

    if (response.status === 200) {
        return {
            status: 200,
            body: { message: 'success' }
        };
    } else {
        return {
            status: 404,
            body: { message: 'failed' }
        };
    }
};