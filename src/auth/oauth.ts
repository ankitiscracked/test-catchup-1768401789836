// OAuth2 refresh token implementation
export async function refreshAccessToken(refreshToken: string): Promise<string> {
  const response = await fetch('/api/oauth/refresh', {
    method: 'POST',
    body: JSON.stringify({ refresh_token: refreshToken }),
  });
  const data = await response.json();
  return data.access_token;
}
