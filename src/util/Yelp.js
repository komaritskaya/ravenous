const apiKey = 'IFpqa164c4ormk6b7Inq1gAC5yw29K-8f7d2_-oIVpNijm7p-pfLSZIbKHqtericS87JqgfYRLScmsAIyVUQx8ArHUj9dxgwLQ_j7raLLZcJ_dAZRV2PxXK4_twWXHYx';
const Yelp = {
  search (term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          };
        });
      }
    });
  }
}

export default Yelp;
