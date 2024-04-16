DROP DATABASE IF EXISTS base_datos_libreria_una_tabla;
CREATE DATABASE base_datos_libreria_una_tabla;
USE base_datos_libreria_una_tabla;
DROP TABLE IF EXISTS autores;
CREATE TABLE autores (
    id_autor INT AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    fecha_nacimiento DATE,
    nacionalidad VARCHAR(40),
    descripcion TEXT,
    imagen VARCHAR(50),
    direccion_email VARCHAR(40) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id_autor),
    UNIQUE (direccion_email)
);

INSERT INTO autores (nombre, fecha_nacimiento, nacionalidad, direccion_email, imagen, descripcion) values
    ('Julio Cortázar', '1914-08-26', 'Argentina', 'julcor@gmail.com','./assets/imagenes/julio-cortazar.jpg',  'Bruselas, (1914-1984). Julio Cortazar, escritor argentino, residió más de treinta años en Francia, donde publicó casi toda su obra. A pesar de haber vivido tantos años fuera de su país, siempre estuvo profundamente interesado por el destino político y social de Latinoamérica, cuyas situaciones de injusticia social y de violencia denunció constantemente. El refinamiento literario de Cortázar, sus lecturas casi inabarcables y su incesante fervor por la causa social, hicieron de él una figura de deslumbrante riqueza, constituída por pasiones a veces encontradas, pero siempre asumidas con genuino ardor.'),
    ('Rafael García Serrano', '1917-02-11', 'España', 'rafgarser@gmail.com', './assets/imagenes/rafael-garcia-serrano.jpg', 'Rafael García Serrano (Pamplona, 1917 - Madrid, 1988) Durante sus primeros años universitarios en Madrid, donde estudia Filosofía y Letras , se afilia a la Falange Española. Como falangista y alférez provisional de Infantería combate en la Guerra Civil. Su extensa obra literaria comienza con Eugenio o proclamación de la Pirimavera y culmina con Quinto Centenario.Rafael García Serrano simultaneó su pasión literaria con su profesión periodística, en la que también destacó como uno de los más grandes del siglo xx español llevando a la crónica periodística la calidad de su prosa, jamás cuestionada ni siquiera por sus más enconados enemigos políticos.'),
    ('Juan Rulfo', '1917-05-16', 'México', 'juarul@gmail.com', './assets/imagenes/juan-rulfo.jpg', 'Juan Rulfo se ha convertido en un hito en la historia de las letras hispánicas  contemporáneas. Pocas veces una obra tan corta ha dado a su autor fama tan  universal e indiscutida como la del escritor mexicano. Nacido en Sayula, en el  estado de Jalisco, durante su infancia vivió las revueltas campesinas y  cristeras, especialmente violentas en su región natal, lo que tendría una  profunda influencia en su posterior quehacer literario. Éste se inició en la  revista Pan, donde aparecieron sus primeros cuentos. En 1953 publicó El Llano  en llamas, colección de relatos que en sucesivas ediciones reunió los dieciséis  que hoy se dan en el presente libro, y en 1955 la novela Pedro Páramo. Este  volumen constituye, pues, la obra fundamental de Juan Rulfo. El escritor  mexicano, que falleció en 1986, obtuvo el Premio Príncipe de Asturias en 1983.'),
    ('Joaquín Gutiérrez', '1918-03-30', 'Costa Rica', 'joagut@gmail.com', null, null),
    ('Fernando Fernán Gómez', '1921-08-28', 'España', 'ferfergom@gmail.com', './assets/imagenes/fernando-fernan-gomez.jpg', '(Lima, 1921-Madrid, 2007). Nacido durante una gira por América de la compañía de teatro de María  Guerrero, sintió desde niño una doble inclinación hacia la farándula y  la literatura. Su gran popularidad, basada en un carisma excepcional  para la interpretación (Oso de Plata al mejor actor por El anacoreta en 1976 y por Stico en 1985), se acrecienta con su actividad como escritor de teatro (La coartada, Las bicicletas son para el verano, premio Lope de Vega 1978, etc.), como guionista de cine y televisión y como director teatral y cinematográfico (La vida por delante, El mundo sigue, El extraño viaje, etc. Su brillante trayectoria en el mundo del espectáculo le ha merecido  el Premio Nacional de Teatro en 1985 y el Nacional de Cinematografía en  1989. Pero a partir de 1984 volcó su cada vez más intensa vocación  literaria en la novela (El viaje a ninguna parte, El vendedor de naranjas, El mal amor, El mar y el tiempo, o El ascensor de los borrachos,  entre otras). Ha escrito también libros autobiográficos, poemas y  narraciones breves. En 1995 recibió el premio Príncipe de Asturias de  las Artes en reconocimiento a una vida dedicada de pleno al espectáculo y  la cultura, y el 31 de enero de 2000 ingresó en la Real Academia  Española con un discurso titulado «La aventura de la palabra».'),
	('Luis Martín-Santos', '1924-11-11', 'España', 'luimar-san@gmail.com', './assets/imagenes/luis-martin-santos.jpg', 'Luis Martín-Santos Ribera nació en Larache en 1924. Novelista y médico. Estudió medicina, doctorándose en la Facultad de Madrid, como psiquiatra, lo que le hizo relacionarse con especialistas en la materia como los doctores López Ibor, Laín Entralgo y Castilla del Pino. Su inquietud por el mundo de la literatura le hizo frecuentar el "Café Gijón" en donde alternó con autores de la talla de Ignacio Aldecoa, Rafael Sánchez Ferlosio y Juan Benet. Se integró en la "Academia Errante", unos de los foros de debate creados por la intelectualidad española en los años sesenta, que buscaba nuevos cauces de expresión. Prestigioso articulista publicó sus trabajos en diversas revistas. Murió en un accidente de tráfico en 1964.'),
    ('Ana María Mature', '1925-07-26', 'España', 'anamarmat@gmail.com', './assets/imagenes/ana-maria-matute.jpg', 'Ana María Matute (Barcelona, 1925-2014) ha cosechado los premios literarios más prestigiosos por su obra, entre la que figuran las novelas Los Abel (finalista del Premio Nadal 1947), Fiesta al Noroeste (Premio Café Gijón 1952), Pequeño teatro (Premio Planeta 1954), Los hijos muertos (Premio de la Crítica 1958 y Premio Nacional de Literatura 1959), Primera memoria (Premio Nadal 1959), Los soldados lloran de noche (Premio Fastenrath de la Real Academia Española 1962), La trampa (1969), La torre vigía (1971), Olvidado Rey Gudú (1996), Aranmanoth (2000), y Paraíso inhabitado (2008). También es autora de cuentos infantiles y de varios libros de relatos, reunidos en el volumen La puerta de la luna (2010). Miembro de la Real Academia Española y de la Hispanic Society of America, en 2007 fue galardonada con el Premio Nacional de las Letras por el conjunto de su obra y, en 2010, con el Premio Cervantes.'),
    ('Carmen Martín Gaite', '1925-12-08', 'España', 'carmargai@gmail.com', './assets/imagenes/carmen-martin-gaite.jpg', 'Carmen Martín Gaite (Salamanca 1925-Madrid 2000), novelista, poeta, ensayista y traductora, publicó su primera novela El balneario en 1955 y es una de las más destacadas representantes de la generación de la posguerra. De sus libros hay que destacar Entre visillos (Premio Nadal 1958), Ritmo lento (1963), El cuarto de atrás (1978), El cuento de nunca acabar (1983), Usos amorosos de la postguerra española (Premio Anagrama de Ensayo 1987), Nubosidad variable (1992), Lo raro es vivir (1996) o Irse de casa (1998). Carmen Martín Gaite recibió también los premios Príncipe de Asturias 1988 y el Nacional de las Letras Españolas 1994.'),
    ('Gabriel García Márquez', '1927-03-06', 'Colombia', 'gabgarmar@gmail.com', './assets/imagenes/gabriel-garcia-marquez.jpg', 'Gabriel García Márquez (1927- 2014), nacido en Colombia, es una de las figuras más importantes e influyentes de la literatura universal. Ganador del Premio Nobel de Literatura en 1982, fue, además de novelista, cuentista, ensayista, crítico cinematográfico, autor de guiones y, sobre todo, un intelectual comprometido con los grandes problemas de nuestro tiempo, y en primer término con los que afectaban a su amada Colombia y a Hispanoamérica en general. Máxima figura del llamado «realismo mágico», en el que historia e imaginación tejen el tapiz de una literatura viva, que respira por todos sus poros, fue en definitiva el hacedor de uno de los mundos narrativos más densos de significado que ha dado la lengua española en el siglo XX. Entre sus novelas más importantes figuran Cien años de soledad, El coronel no tiene quien le escriba, Relato de un náufrago, Crónica de una muerte anunciada, La mala hora, El general en su laberinto, el libro de relatos Doce cuentos peregrinos, El amor en los tiempos del cólera y Diatriba de amor contra un hombre sentado. En el año 2002 publicó la primera parte de su autobiografía, Vivir para contarla; en 2004 volvió a la ficción con Memorias de mis putas tristes, y en 2012 sus relatos fueron recopilados en Todos los cuentos.'),
    ('Rafael Sánchez Ferlosio', '1927-12-04', 'España', 'rafsanfer@gmail.com', './assets/imagenes/rafael-sanchez-ferlosio.jpg', 'Rafael Sánchez Ferlosio (Roma, 1927- Madrid, 2019) es hijo de padre español y madre italiana. Es uno de los miembros más destacados de la narrativa española de la generación del 50 y junto a autores como Jesús Fernández Santos, Alfonso Sastre, Carmen Martín Gaite o Ignacio Aldecoa fundó y colaboró en la ’Revista Española’. Todos ellos compartieron una poética realista que presentaba notables influencias del neorrealismo italiano. Con esta novela obtuvo en 1956 el Premio Nadal y el Premio Nacional de la Crítica. Ganó los Premios Nacionales de Ensayo y Ciudad de Barcelona en 1994. En el año 2004 fue galardonado con el Premio Cervantes y en 2009 con el Premio Nacional de las Letras.'),
    ('Carlos Fuentes', '1928-11-11', 'México', 'carfue@gmail.com', './assets/imagenes/carlos-fuentes.jpg', 'Panamá, (1928-  ). Carlos Fuentes, diplomático, novelista, ensayista y guionista, fue embajador de México en Francia en los setenta. Tras asiduas colaboraciones en revistas culturales, abandonó la política para dedicarse enteramente a la literatura. Divulgador de la cultura mexicana, sus obras trazan un fresco de la sociedad, participando del debate sobre la identidad cultural y política de México. El conjunto de su obra ha merecido numerosos galardones entre los que destacan los premios Cervantes y Príncipe de Asturias.')