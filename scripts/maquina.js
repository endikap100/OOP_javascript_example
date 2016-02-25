function Maquina(nombre){
				var fuerza = Math.floor((Math.random() * 100) + 1); //1-100
				Jugador.apply(this, [nombre, fuerza, 130]);
			}
			Maquina.prototype = new Jugador();
			Maquina.prototype.constructor = Maquina;