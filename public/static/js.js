var movies =   [[1, "O curioso caso de Bejamim Button", "O Homem do Castelo Alto é um romance escrito pelo norte-americano Philip K. Dick.", "static/img/OCCDBB.jpg", "static/video/OCCDBB.mp4"],
                [2, "One Piece", "O Homem do Castelo Alto é um romance escrito pelo norte-americano Philip K. Dick.", "static/img/OP.jpg", "static/video/OP.mp4"],
                [3, "The Witcher", "O Homem do Castelo Alto é um romance escrito pelo norte-americano Philip K. Dick.", "static/img/TW.jpg", "static/video/TW.mp4"],
                [4, "O homem do castelo alto", "O Homem do Castelo Alto é um romance escrito pelo norte-americano Philip K. Dick.", "static/img/OHDCA.jpg", "static/video/OHDCA.mp4"],
                [5, "Shutter Island", "Shutter Island Ilha do Medo, Shutter Island é um filme de suspense psicológico neo-noir estadunidense de 2010", "static/img/AIDM.jpg", "static/video/AIDM.mp4"]];

function videoStart(){
        try{
            var title = document.getElementById("preview-title");
            var description = document.getElementById("preview-description");
            var video = document.getElementById("video-preview");
            var image = document.getElementById("preview-img");
            videoData = ramdomTrailer();
            title.textContent = videoData[1];
            description.textContent = videoData[2];
            video.src = videoData[4];
            image.src = videoData[3];
            video.load();
            video.play();
    
        }
        catch(e){
            alert(e);
        }

        try{
            setTimeout(function() {
            obj = document.getElementById('video-preview');
            obj.addEventListener('mouserover', (event) => {
            event.target.play();
        });
    
            }, 1000);
        }
        catch(e){
            alert("Erro: " + e)
        }
    
        /*try{
                  
            obj = document.getElementById('video-preview');
            obj.addEventListener('mouseout', (event) => {
            event.target.pause();
        });
    }
        catch(e){
            alert("Erro: " + e)
        }*/
    }

    function previewPopup(){
        var e = document.getElementById('div-thuub');
        e.onmouseover = function() {
        document.getElementById('popup').style.display = 'block';
    }
    e.onmouseout = function() {
        document.getElementById('popup').style.display = 'none';
}

}
    function ramdomTrailer(){
            let data = movies;
            index = Math.floor(Math.random()*(data.length))+0;
            return data[index];
            }

            /*let trailer = Math.floor(Math.random()*2)+1;
            let t1  = ["O homem do castelo alto", "O Homem do Castelo Alto é um romance escrito pelo norte-americano Philip K. Dick.", "static/img/OHDCA.jpg", "static/video/OHDCA.mp4"];
            let t2 = ["O curioso caso de Benjamim Button", "Benjamin Button é um homem que nasce idoso.", "static/img/OCCDBB.jpg", "static/video/OCCDBB.mp4"];
            let t3 = ["The wi", "Benjamin Button é um homem que nasce idoso.", "static/img/OCCDBB.jpg", "static/video/OCCDBB.mp4"];
            let t4 = ["O curioso caso de Benjamim Button", "Benjamin Button é um homem que nasce idoso.", "static/img/OCCDBB.jpg", "static/video/OCCDBB.mp4"];
            if (trailer == 1){
                return t1;
                }
            if (trailer == 2){
                return t2;
            }
            if (trailer == 3){
                return t3;
            }
            if (trailer == 4){
                return t4;
            }
        }*/

        /*let obj = document.getElementById("toHover");
        var i = 0;
        if (i != 1){
        obj.addEventListener("mouseover", () =>{
        let text = document.createElement("p");
        /*let playButton = document.createElement("svg");
        let path1 = document.createElement("path");
        //let path2 = document.createElement("path");
        obj.style.transform = "scale(1.2)";
        playButton.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        playButton.setAttribute("width", "16");
        playButton.setAttribute("height", "16");
        playButton.setAttribute("fill", "currentColor");
        playButton.setAttribute("class", "bi bi-play-circle");
        playButton.setAttribute("viewBox", "0 0 16 16");
        path1.setAttribute("d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z");
        playButton.appendChild(path1);*
        text.appendChild(document.createTextNode("One Piece"));
        obj.appendChild(text);
        //obj.appendChild(playButton);
        //obj.setAttribute("z-index", "20");
        i = 1;
    });
    }*/
     
    /*obj.addEventListener("mouseout", () =>{
        target.style.display = 'none';
    });*/

   /* var element = document.getElementById("div-row-navbar");
    var is_visible = false;

    window.on('scroll', function (e) {
    // Check if $element is on screen using code from other answer

    if (checkVisible(element)) {
         if (!is_visible) {
             element.trigger('entered_view');
         }
         element.style.position = 
         is_visible = true;
    } else {
         if (is_visible) {
             element.trigger('exited_view');
         }
         is_visible = false;
    }
});*/

function getMovieData(){
    var data = movies;
    //alert(data[0][1]);
    return data;
}

function renderMovieRow(){
    var data = getMovieData();
    //alert(data[1][1]);
    var x = data.length;
    var y =  data[0].length;
    //alert(x);
    var mainDiv = document.getElementById("div-row-text-center");
    /*for(var i = 0; i <3 ; i++){
        var row = document.createElement("div");
        row.className = "";*/
        var row = 0;
        var divRow = document.createElement("div");
        divRow.className = "row";

        try{
        for (var j = 0; j <x ; j++){
            if (row == 3){
                divRow = document.createElement("div");
                divRow.className = "row";
                //mainDiv.append(row);
                row = 0;
            }
            let toHover = document.createElement("div");
            let hidden = document.createElement("div");
            let title = document.createElement("h6");
            let playButton = document.createElement("svg");
            let img = document.createElement("img");
            let path1 = document.createElement("path");
            //let path2 = document.createElement("path");

            toHover.className += " toHover";
            toHover.className += " col-2";
            hidden.className = "hidden-content";
            img.className = "img-thumb";

            title.className = "text-thumb-title";
            playButton.className = "button-thumb-play";
            img.setAttribute("src", data[j][3]); 

            title.textContent = data[j][1];

            path1.setAttribute("d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z");
            //path2.setAttribute("d", "M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z");
            
            playButton.appendChild(path1);
            //playButton.appendChild(path2);
            playButton.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            playButton.setAttribute("width", "32");
            playButton.setAttribute("height", "32");
            playButton.setAttribute("fill", "currentColor");
            playButton.setAttribute("class", "bi bi-play-circle");
            playButton.setAttribute("viewBox", "0 0 16 16");
            

            hidden.appendChild(title);
            hidden.appendChild(playButton);
            toHover.appendChild(img);
            
            divRow.appendChild(toHover);

            toHover.appendChild(hidden);

            mainDiv.appendChild(divRow);

            row++;

            //toHover.appendChild();

        //}
        }
    }
        catch(e){
            alert(e + " " +e.lineNumber);

        }
    }


   