import YOUTUBE_API_KEY from "./request"

const Url = {
   MostPopularVideos: `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=400&key=${YOUTUBE_API_KEY}`,
   LikedByMe: `videos?part=snippet%2CcontentDetails%2Cstatistics&myRating=like&key=${YOUTUBE_API_KEY}`,
   SearchByKeyword:(search)=>`search?part=snippet&maxResults=25&q=${search}&key=${YOUTUBE_API_KEY}`,
   MySubscription: `subscriptions?part=snippet%2CcontentDetails&mine=true&key=${YOUTUBE_API_KEY}`,
   MyPlaylist: `playlists?part=snippet%2CcontentDetails&maxResults=25&mine=true&key=${YOUTUBE_API_KEY}`,
   searchByRelaatedVideo: (videoId) => `search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${YOUTUBE_API_KEY}`,
   Channelid: (Channel_Id) => `channels?part=snippet%2CcontentDetails%2Cstatistics&id=${Channel_Id}&key=${YOUTUBE_API_KEY}`,
   Video: `videoCategories?part=snippet&key=${YOUTUBE_API_KEY}`,
}
export default Url;
