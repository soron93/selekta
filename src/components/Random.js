import React, { Component } from 'react'

/*// EXAMPLE FROM STACK OVER FLOW

LIST OF GENRES 
https://everynoise.com/everynoise1d.cgi?scope=all&vector=popularity


make a variable with some search queries and put it in an array. (you can create more search queries.
$getRandomSongsArray = array('%25a%25', 'a%25', '%25e%25', 'e%25', '%25i%25', 'i%25', '%25o%25', 'o%25');

//This will get a random result out of the array above
$getRandomSongs = $getRandomSongsArray[array_rand($getRandomSongsArray)];

//This will get a random offset number between 1 and 1000. So you get a random track. (you can change the numbers btw)
$getRandomOffset = rand(1, 1000);

//This is the url that gets the results out of the Spotify API. You have to put in the variables you created above.
$url = "https://api.spotify.com/v1/search?query=$getRandomSongs&offset=$getRandomOffset&limit=1&type=track&market=NL";
*/




class Random extends Component {


    render() {

        console.log('test this')

        return (
            
            <div >
                <h1>RANDOM COMPONENT SHOWING</h1>
               
            </div>


        )
    }
}

export default Random