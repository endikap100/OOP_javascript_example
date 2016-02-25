function Extraterrestre(nombre){
				var fuerza = Math.floor((Math.random() * 85) + 1); //1-85
				Jugador.apply(this, [nombre, fuerza, 150]);

				this.mostrarNombre = function()
				{
					console.log("Nombre: " + this.nombre.split('').reverse().join(''));
				}
			}
			Extraterrestre.prototype = new Jugador();
			Extraterrestre.prototype.constructor = Extraterrestre;