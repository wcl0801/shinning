$("#dis").on("mouseover mouseout click",function(ev){
				
				$(".list").stop().slideToggle(1000);
			});
			$("#menu ul li a").on("mouseenter", function() {
				console.log(this);
				$(this).css({
						border: "1px solid #7B7B7B",
					
					    color: "white"
				});
				
				});
			
			$("#menu ul li a").on("mouseleave", function() {
				//console.log(this);
				$(this).not(".light").css({
					border: "none",
					//border-radius: "5px",
					color: "#7B7B7B"
				});
			});