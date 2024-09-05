let toggleButton = document.getElementById("toggleButton");
// console.log(toggleButton);


let hide_items =document.getElementsByClassName("hide_items");

// console.log(hide_items);

toggleButton.addEventListener("click",() =>{
    // console.log("Clicking......");

    for (let val of hide_items){
        // console.log(val);

        val.classList.toggle("hidden_content")
    }

})



// ========== API Integration =============

/*

    ! 1. Google Cloud
        a. search google cloude
        b. click on first link
        c. click on console
        d. click on i agree
        e.
        f.
        g.
        h.
        i.
        j.
        k.
        l.
        m.
        n.
        o.
        p.
        q.


*/ 


const api_key = "AIzaSyCOF2Ja4f51Ofc_OmptlQC7PtgqzZ3GaqA";
const search_http = "https://www.googleapis.com/youtube/v3/search?";
const channel_http = "https://www.googleapis.com/youtube/v3/channels?";

let search_button = document.getElementById("search_button");
// console.log(search_button);

search_button.addEventListener("click",()=>{
    let user_input = document.getElementById("user_input").value;
    // console.log(user_input);
    callYoutubeDataAPI(user_input)

})

let callYoutubeDataAPI = async query =>{
    // console.log(query);

    let searchParams = new URLSearchParams({
        key : api_key,
        part: "snippet",
        q:query,
        maxResults :5,
        type :"video",
        regionCode:"IN",
    });

    let res = await fetch(search_http + searchParams);
    // console.log(res);
    let data = await res.json();
    // console.log(data);

    data.items.map(item =>{
        // console.log(item);
        getChannelIcon(item);

    });

};

// ? to get channel icon based on channel ID

let getChannelIcon = async video_data => {
    // console.log(video_data);

    let channelParam = new URLSearchParams({
        key: api_key,
        part : "snippet",
        id :  video_data.snippet.channelID,
    });

    let res = await fetch(channel_http + channelParam);
    let data = await res.json();
    console.log(data);
};









