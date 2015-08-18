var count = 0;
	class Bag
	{
			var xSpeed;
			var ySpeed;
			var xPos;
			var yPos;
			var red;
			var green;
			var blue;
			var width;
			var height;
			var drawing;
			
			Bag(w, h, x, y, speedX, speedY,color)
			{
				xPos=x;
				yPos=y;
				xSpeed=speedX;
				ySpeed=speedY;
				width=w;
				height=h;
				red=color[0];
				green=color[1];
				blue=color[2];
				drawing=true;
			}
			
			void drawBody(){
				noStroke();
				fill(red, green, blue);
				rect(xPos+9,yPos+40,80,30);//1
				rect(xPos+9,yPos+80,80,30);//2
				rect(xPos+40,yPos+40,60,70);//3
				
			}
			
			void drawBody2(){
				noStroke();
				fill(red, green, blue);
				rect(xPos+100, yPos+160, 20, 80);//1
				rect(xPos+160, yPos+160, 20, 80);//2
				rect(xPos+120, yPos+180, 40,60);//3
			}
			
			void Move(){
				xPos=xPos-xSpeed;
				
				if (xPos<=0 || xPos>=1100){
					xSpeed=xSpeed*-1;
				}
				
				if (yPos<=0 || yPos>=850){
					ySpeed=ySpeed*-1;
				}
				
				if (xPos>=1100){
					xSpeed=0;
					alert("You Lost!");
					alert("Refresh the page to play again");
				}
			}
			//bool shouldDisappear(xPos,yPos){}
			void mousePressed(x,y)
			{	
				if(((x<=xPos + 50 && x>= xPos - 50) && (y<=yPos + 80 && y>= yPos - 80)))
				{//VERTICAL && body2
					count = count+1;
					drawing=false;
					xPos=-500;
					yPos=-500;
					xSpeed=0;
					ySpeed=0;
					//return true; // true means bag was clicked
				}
				
				if(((x<=xPos + 40 && x>= xPos - 9) && (y<=yPos + 40 && y>= yPos - 40)))
				{//HORIZONTAL
					count=count+1;
					drawing=false;
					xPos=-500;
					yPos=-500;
					xSpeed=0;
					ySpeed=0;
					//return true; // true means bag was clicked
				}
				
			}
	}
		
	class Tree
	{
		var xSpeed;
		var ySpeed;
		var xPos;
		var yPos;
		var red;
		var green;
		var blue;
		var width;
		var height;
		
		Tree(w, h, x, y, speedX, speedY,color){
			xPos=x;
			yPos=y;
			xSpeed=speedX;
			ySpeed=speedY;
			width=w;
			height=h;
			red=color[0];
			green=color[1];
			blue=color[2];
		}
		void drawTree(){
			noStroke();
			
			fill(97,56,0);
			rect(1250, 340, 200, 978);
			
			fill(28,192,30);
			ellipse(1250, 320, 300, 300);
			ellipse(1400, 320, 300, 300);
			ellipse(1300, 200, 300, 300);
			ellipse(1395, 200, 300, 300);

			fill(59, 37, 7);
			ellipse(1350, 640, 130, 200);
		}
	}
	
	var list=[];
	var tre3;
	void setup(){
		size(1500,900);
		background(255,255,255);
		
		var num = random(4,9);
		for(var i=0; i < num; i++)
		{
			var randX = random(0,200);
			var randY= random(0,878);
			var col0r = [255, 255, 204];
			var c0lor = [173, 173, 133];
			var s = random(3,4);
			list.push(new Bag(50,20,randX,randY,s,s,col0r));
			list.push(new Bag(50,20,randX,randY,s,s,col0r));
			tre3 = (new Tree(50,20,randX,randY,s,s,c0lor));
		}
	}
		
		
		
	void draw(){  
		noStroke();
		background(153, 174, 194);
		document.getElementById("count").innerHTML=count;
		tre3.drawTree();
		fill(245, 255, 255);
		ellipse(200,400,250,250);
		ellipse(300,400,250,250);
		ellipse(250,400,250,250);
		ellipse(230,350,250,250);
		
		fill(230,255,255);
		ellipse(600,700,150,150);
		ellipse(700,700,150,150);
		ellipse(650,700,150,150);
		ellipse(630,650,150,150);
		ellipse(660,700,150,150);
		
		fill(240,255,255);
		ellipse(850,300,350,350);
		ellipse(900,180,350,350);
		ellipse(850,340,250,250);
		ellipse(730,250,350,350);
		ellipse(860,300,250,250);
		
		for(var i=0; i<list.length; i++)
		{

			if(list[i].drawing==true){
				list[i].drawBody();
				list[i].Move();
			}
		}
	}

	void mousePressed()
	{
		for(var i=0; i<list.length; i++){
			if(list[i].mousePressed(mouseX,mouseY))
			{
				count=count+1;
			}
		}	

	}
