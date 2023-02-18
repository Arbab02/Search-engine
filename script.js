let search = document.getElementById('search');
let result = document.getElementById('result');
let heading = document.getElementById('heading');

function myfunc() {
  if (search.value == "youtube" || search.value == "Youtube") {
    result.innerHTML = "YouTube is a global online video sharing and social media platform headquartered in San Bruno, California. It was launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim. It is owned by Google, and is the second most visited website, after Google Search.When you use YouTube, you join a community of people from all over the world. The guidelines below help keep YouTube fun and enjoyable for everyone. We hope to protect viewers, creators, and especially minors. That's why we've got rules around keeping children safe, sex & nudity, and self harm. Learn what's allowed on YouTube and what to do if you see content that doesn't follow these policies."
    heading.innerHTML = "Youtube"
  }

  else if (search.value == "Facebook" || search.value == "facebook") {
    result.innerHTML = "Facebook is a post sharing platform. Meta Platforms, Inc., doing business as Meta and formerly named Facebook, Inc., and TheFacebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California. The company owns Facebook, Instagram, and WhatsApp, among other products and services.Create an account or log into Facebook. Connect with friends, family and other people you know. Share photos and videos, send messages and get updates."
    heading.innerHTML = "Facebook";
  }

  else if (search.value == "Google" || search.value == "google") {
    result.innerHTML = "Google LLC is an American multinational technology company focusing on online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, artificial intelligence, and consumer electronics. Google, Mountain View, CA. 28404661 likes · 19653 talking about this. Organizing the world's information and making it universally accessible and useful.  David arranged a meeting with Page and Brin and his Granite co-founder Andy Bechtolsheim. The meeting was set for 8 AM at the front porch of David's home in Palo Alto and it had to be brief because Andy had another meeting at Cisco, where he now worked after the acquisition, at 9 AM. Andy briefly tested a demo of the website, liked what he saw, and then went back to his car to grab the check. David Cheriton later also joined in with a $250,000 investment."
    heading.innerHTML = "Google";
  }

  else if (search.value == "Fiverr" || search.value == "fiverr") {
    result.innerHTML = "Fiverr is a global online marketplace for freelance services. Fiverr’s platform connects freelancers to people or businesses looking to hire. Fiverr's mission is to change how the world works together. Fiverr connects businesses with freelancers offering digital services in 500+ categories. Introducing Fiverr's new Community Hub— your home for meaningful connections, peer support, and professional growth. Revamped and expanded, find even more ways"
    heading.innerHTML = "Fiverr";
  }

  else if (search.value == "youtube.com") {
    location.href = "https://www.youtube.com";
  }

  else if (search.value == "google.com") {
    location.href = "https://www.google.com";
  }
  else if (search.value == "facebook.com") {
    location.href = "https://www.facebook.com";
  }
  else if (search.value == "skype.com") {
    location.href = "https://www.skype.com";
  }

  else if (search.value == "microsoft.com") {
    location.href = "https://www.microsoft.com";
  }
  else if (search.value == "github.com") {
    location.href = "https://www.github.com";
  }
  else if (search.value == "bootstrap.com") {
    location.href = "https://getbootstrap.com";
  }
  else if (search.value == "fiverr.com") {
    location.href = "https://www.fiverr.com";
  }
  else if (search.value == "upwork.com") {
    location.href = "https://www.upwork.com";
  }
  else if (search.value == "twitter.com") {
    location.href = "https://www.twitter.com";
  }
}