function Jugador(nombre, fuerza, salud)
			{ 
				this.nombre = nombre;
				this.fuerza = fuerza;
				this.salud = salud;
			}

			Jugador.prototype.mostrarNombre = function()
			{
				console.log("Nombre: " + this.nombre);
			}
			Jugador.prototype.luchar = function(jugador)
			{
				if(Math.random()*this.fuerza>jugador.fuerza){
					jugador.salud-=this.fuerza;
				}
				else{
					this.salud-=jugador.fuerza;
				}
			}