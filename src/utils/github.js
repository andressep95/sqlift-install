export async function fetchStars(owner, repo) {
    const url = `https://api.github.com/repos/${owner}/${repo}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.error('Failed to fetch GitHub stars:', response.statusText);
        return null;
      }
      const data = await response.json();
      return data.stargazers_count || 0;
    } catch (error) {
      console.error('Error fetching GitHub stars:', error);
      return null;
    }
  }
  