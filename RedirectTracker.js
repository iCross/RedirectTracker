addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const targetUrl = request.headers.get('X-Target-URL');

  if (!targetUrl) {
    return new Response('X-Target-URL header is missing.', { status: 400 });
  }

  try {
    const redirects = [targetUrl];
    await followRedirects(targetUrl, redirects);
    const responseText = redirects.join('\n');
    return new Response(responseText, {
      headers: { 'Content-Type': 'text/plain' }
    });
  } catch (error) {
    return new Response(`Error: ${error.message}`, { status: 500 });
  }
}

async function followRedirects(url, followed, maxRedirects = 20) {
  if (followed.length > maxRedirects) {
    throw new Error('Exceeded maximum redirect limit.');
  }

  const response = await fetch(url, {
  });

  const location = response.headers.get('Location');
  if (location) {
  }

  return followed;
}

