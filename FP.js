	
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
			
			void drawBody()
			{
				noStroke();
				fill(red, green, blue);
				rect(xPos+9,yPos+40,80,30);
				rect(xPos+9,yPos+80,80,30);
				rect(xPos+40,yPos+40,60,70);
				
				//set drawBody=true
				//if drawBody=false
					//move off the screen
				
			}
			
			void drawBody2()
			{
				noStroke();
				fill(red, green, blue);
				rect(xPos+100, yPos+160, 20, 80);
				rect(xPos+160, yPos+160, 20, 80);
				rect(xPos+120, yPos+180, 40,60);
			}
			
			void Move()
			{
				xPos=xPos-xSpeed;
				
				if (xPos<=0 || xPos>=1220)
				{
					xSpeed=xSpeed*-1;
				}
				
				if (yPos<=0 || yPos>=978)
				{
					ySpeed=ySpeed*-1;
				}
				
				if (xPos>=1220)
				{
					xSpeed=0;
				}
				
				//var b = Move();
				//b = "true";
				//if b= "false"
				//{
					//xPos = 300000;
				//}
				//else {
					//alert("Not Working");
				//}
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
			
			Tree(w, h, x, y, speedX, speedY,color)
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
			void drawTree()
			{
				noStroke();
				fill(red,green,blue);

				rect(112, 170, 75, 200);

				ellipse(100, 100, 100, 100);
				ellipse(200, 150, 100, 100);
				ellipse(125, 155, 100, 100);
				ellipse(170, 85, 100, 100);
				ellipse(230, 110, 80, 80);
				ellipse(80, 140, 80, 80);
				ellipse(130, 55, 80, 80);
			}
		}
		
		var list=[];
		var tre3;
		void setup()
		{
			size(1920,1078);
			background(255,255,255);
			
			var num = random(2,3);
			for(var i=0; i < num; i++)
			{
				var randX = random(0,200);
				var randY= random(0,878);
				//var a = random(0,255);
				//var b = random(0,230);
				//var c = random(0,240);
				//var randColor=[a,b,c];
				var col0r = [255, 255, 204];
				var c0lor = [173, 173, 133];
				var s = random(3,5);
				list.push(new Bag(50,20,randX,randY,s,s,col0r));
				list.push(new Bag(50,20,randX,randY,s,s,col0r));
				tre3 = (new Tree(50,20,randX,randY,s,s,c0lor));
			}
		}
				
		void draw()
		{  
			noStroke();
			background(153, 174, 194);
			
			tre3.drawTree();
			
			for(var i=0; i<list.length; i++)
			{
				list[i].drawBody();
				list[i].drawBody2();
				list[i].Move();
			}
		}
		//mouseClicked = function() {
			//set drawbody=false
		//};