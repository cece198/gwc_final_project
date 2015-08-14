	
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
			}
			
			void drawBody(){
				noStroke();
				fill(red, green, blue);
				rect(xPos+9,yPos+40,80,30);
				rect(xPos+9,yPos+80,80,30);
				rect(xPos+40,yPos+40,60,70);
				
			}
			
			void drawBody2(){
				noStroke();
				fill(red, green, blue);
				rect(xPos+100, yPos+160, 20, 80);
				rect(xPos+160, yPos+160, 20, 80);
				rect(xPos+120, yPos+180, 40,60);
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
				}
			}
			bool shouldDisappear(x,y)
			{
				if((x<=xPos + 100 || x>= xPos - 100) && (y<=yPos + 160 || y>= yPos - 160) 
					&& (x<=xPos + 160 || x>= xPos - 160) && (y<=yPos + 160 || y>= yPos - 160) 
					&& (x<=xPos + 120 || x>= xPos - 120) && (y<=yPos + 180 || y>= yPos - 180))
				{
					list[0].hide();//make bag disappear here
					return true; // true means bag was clicked
				}
				else
				{
					return false;
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
				ellipse(1350, 640, 130, 200)
			}
		}
		
		var list=[];
		var tre3;
		
		void setup(){
			
			size(1500,900);
			background(255,255,255);
			
			var num = random(2,3);
			for(var i=0; i < num; i++)
			{
				var randX = random(0,200);
				var randY= random(0,878);
				var col0r = [255, 255, 204];
				var c0lor = [173, 173, 133];
				var s = random(3,5);
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
			
			for(var i=0; i<list.length; i++)
			{
				list[i].drawBody();
				list[i].drawBody2();
				list[i].Move();
			}
		}
		
		void mousePressed(){
			if(list[0].shouldDisappear(mouseX,mouseY))
			{
				shouldDraw=false;
				count=count+1;
			}
			
		}



