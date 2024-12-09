export async function fetchStars(owner: string, repo: string): Promise<number> {
    const url = `https://api.github.com/repos/${owner}/${repo}`;
    
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        console.error('Error fetching GitHub stars:', response.statusText);
        return 0;
      }
      
      const data = await response.json();
      return data.stargazers_count || 0;
    } catch (error) {
      console.error('Error fetching GitHub stars:', error);
      return 0;
    }
  }
  