import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//FIRST METHOD


const Fbcard = () => {


  const [data, setData] = React.useState([]);
  
  function post(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let postText = document.getElementById("postText").value;
    let time = new Date().toLocaleTimeString();
    let newData = {
      postText: postText,
      name: name,
      time: time
    }
    console.log(postText);

    setData((previousValue) => {
      return previousValue.concat([newData]);
    })
  }





  return <div >



    {/* <h1> <img className={"profile"} src={"https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"} alt="profile"/></h1> */}
    
{/*     
    <p> {body}</p>
    <img className={"post-img"} src={imageUrl} alt="fbpostpic"/> */}


  
    <form className={"formStyle"} onSubmit={post}>

      <input required placeholder="name" type="text" id="name" />
      <br/>
      <textarea required placeholder="what is in your mind" type="text" id="postText" />
      <br/>
      <button className={"formBtn"}> Post </button>
      </form>

      { console.log("data: ", data)}




    {data.map((eachItem, i) => {
        return (
          <div className={"body"} key={i}>
            
            {/* <h1>UserName</h1>    */}
            <div className={"userDetail"}>
            <img className={"profile"} src={"https://storage.googleapis.com/stateless-campfire-pictures/2019/04/18444f1a-dummyuserimage-15561967274lp8c.jpg" } alt={"userprofile"}/>
            <h3 className={"userName"}> {eachItem.name}</h3>
            <div className="time">{eachItem.time}</div>
            </div>
            <br/>
            <h8 className={"poststyle"}>{eachItem.postText}</h8>
          </div>
        )
       })}









  </div>
}

ReactDOM.render(<Fbcard/>,
  // <div>
  //   <Fbcard
  //   profile="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
  //   title="User Name"
  //   body="Natural Beauty 1"
  //   imageUrl ="https://hopeforthebrokenhearted.files.wordpress.com/2020/11/prayer-from-debbie-9.jpg"
  //   />
  //   <Fbcard
  //   profile="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
  //   title="User Name Post"
  //   body="Natural Beauty 1"
  //   imageUrl ="https://i.pinimg.com/originals/02/ae/74/02ae74b5ac0a32f60c3bf0d871831f8a.jpg"
  //   />
  //   <Fbcard
  //   profile="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
  //   title="Facebook Post"
  //   body="Natural Beauty 1"
  //   imageUrl ="https://upload.wikimedia.org/wikipedia/en/e/e3/Konaseema_greenery_1.JPG"
  //   />
  // </div>,
    document.getElementById("root")
);
