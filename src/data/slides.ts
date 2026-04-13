export type SlideType = "cover" | "text" | "image" | "end";

export interface Slide {
  type: SlideType;
  act?: string;
  text?: string;
  image?: string;
  imageCaption?: string;
}

export const slides: Slide[] = [
  // 0 — Cover
  {
    type: "cover",
  },

  // 1
  {
    type: "text",
    text: "Cuentan los antiguos que, cuando los dioses todavía se inclinaban a escuchar las súplicas de los hombres, hubo dos almas nacidas en extremos opuestos del mundo a las que el destino había señalado mucho antes de que ellas mismas aprendieran a pronunciar su propio nombre.",
  },

  // 2
  {
    type: "text",
    act: "Él se llamaba Alerio",
    text: "Vivía en una tierra de colinas secas, templos de piedra clara y olivares castigados por el sol. Era un hombre sereno, de palabra medida, querido por los suyos y respetado por su ciudad. Compartía su vida con una mujer buena y leal, a la que cuidaba con la ternura que nace de la costumbre, del deber y del afecto limpio. No había crueldad en él, ni engaño, ni deseo de herir. Pero en el fondo de su pecho habitaba un silencio que ni la paz de su casa ni la rectitud de su vida conseguían colmar.",
  },

  // 3
  {
    type: "text",
    act: "Ella se llamaba Myrina",
    text: "Vivía al otro lado de un mar inmenso, en una ciudad levantada sobre acantilados blancos, donde las columnas de los santuarios parecían sostener el cielo. También ella tenía a su lado a un hombre que no era malo, ni cruel, ni indigno. Pero estaba hecho de vicios pequeños y grandes, de esas debilidades que van enturbiando el alma sin llegar a romperla del todo: excesos, ausencias, promesas a medias, una forma de estar en la vida que nunca terminaba de sostener nada por completo. Myrina no vivía encadenada a un monstruo, sino a una historia incompleta. Y quizá por eso el dolor era aún más difícil de nombrar. Porque no siempre hace falta la maldad para sentir que alguien no era tu destino.",
  },

  // 4 — imagen-01
  {
    type: "image",
    image: "/images/imagen-01.jpg",
    imageCaption: "Ninguno de los dos sabía del otro.",
  },

  // 5
  {
    type: "text",
    text: "Y, sin embargo, ambos acudían cada luna nueva al amparo de Atenea, señora de la sabiduría, en templos consagrados a ella en extremos distintos del mar. Iban buscando claridad. Iban buscando orden. Iban, sin saberlo, buscando una respuesta a una ausencia que no comprendían. Después de ofrecer aceite y laurel, dormían entre las columnas del santuario, como hacían quienes esperaban que los dioses les revelaran en sueños aquello que la vigilia no les sabía decir.",
  },

  // 6
  {
    type: "text",
    text: "Pero aquella respuesta no vino en forma de palabra, ni de augurio, ni de voz divina.\n\nVino en forma de encuentro.\n\nPorque fue Morfeo, señor de los sueños, quien obedeció una ley más antigua que incluso el deseo de los hombres: la ley del destino. No los unió por capricho, ni por crueldad, ni por diversión divina. Los unió porque ya habían sido escritos el uno para el otro en un lugar al que ni siquiera los dioses se atreven del todo a mirar de frente.",
  },

  // 7
  {
    type: "text",
    text: "Una noche, sin anuncio ni presagio, Alerio soñó con una mujer desconocida. No vio primero su rostro, sino la extraña familiaridad de su presencia, como si su alma la hubiera recordado antes de conocerla. Soñó que caminaba junto a ella por un patio de mármol azul, bajo ramas de ciprés que no pertenecían a su tierra. Y al despertar supo, con esa certeza sin prueba que solo traen ciertas cosas sagradas, que había visto algo que no pertenecía al mundo común de los sueños.",
  },

  // 8
  {
    type: "text",
    text: "Aquella misma noche, Myrina soñó con un hombre al que nunca había visto. No se fijó primero en su rostro, sino en la paz inmensa que sentía a su lado, una paz nueva, limpia, casi dolorosa, como si toda su vida anterior hubiera sido solo el eco imperfecto de algo que por fin se presentaba completo. Soñó que él le hablaba en un templo suspendido entre la noche y el alba, y aunque al despertar no recordaba cada palabra, sí conservó la certeza de que acababa de rozar su verdad.",
  },

  // 9 — imagen-02
  {
    type: "image",
    image: "/images/imagen-02.jpg",
    imageCaption: "Era un lugar hecho para los reconocimientos del alma.",
  },

  // 10
  {
    type: "text",
    text: "Pensaron que era casualidad.\n\nDespués volvió a suceder.\n\nY otra vez.\n\nY otra.\n\nCada luna nueva, tras ofrecer dones a Atenea, Morfeo les abría el mismo umbral. Allí se encontraban en un lugar que no existía en ningún reino humano: un jardín silencioso, suspendido entre la noche y el alba, con estanques de agua inmóvil, columnas interminables y una luz que no venía ni del sol ni de la luna.",
  },

  // 11
  {
    type: "text",
    text: "Al principio con cautela, como hablan los que temen que el prodigio se rompa si se acercan demasiado. Se preguntaron sus nombres. Se contaron el color de sus tierras, el olor de sus templos, la forma en que el viento golpeaba sus ventanas al final del verano. Se hablaron de sus miedos con la delicadeza con la que otros se hablan de sus dioses.",
  },

  // 12
  {
    type: "text",
    text: "Pronto comprendieron algo que los llenó de asombro y de espanto al mismo tiempo: encajaban.\n\nNo como encajan quienes coinciden, sino como encajan quienes ya habían sido pensados juntos. Cada pensamiento de uno encontraba en el otro una resonancia perfecta. Cada duda, una comprensión. Cada sombra, una luz. No había esfuerzo en entenderse. No había artificio. Era como si el destino, cansado de esperar, hubiera abierto por fin una rendija para recordarles a ambos quiénes eran realmente.",
  },

  // 12.5 — imagen-07 (los dos en el jardín)
  {
    type: "image",
    image: "/images/imagen-07.jpg",
    imageCaption: "Como si el destino hubiera abierto una rendija para recordarles quiénes eran.",
  },

  // 13
  {
    type: "text",
    text: "Alerio comenzó a esperar la noche con una impaciencia que nunca había sentido. Myrina empezó a vivir los días como una larga antesala del sueño. Y sin que ninguno lo dijera en voz alta, ambos supieron que aquello que habían hallado era más verdadero que muchas de las cosas visibles que los rodeaban.\n\nPorque hay amores que nacen del deseo. Otros de la costumbre. Otros de la soledad.\nPero el suyo había nacido del destino.\nY contra eso no siempre bastan ni la prudencia, ni la distancia, ni las vidas ya construidas.",
  },

  // 14
  {
    type: "text",
    text: "Pero también supieron el peso de su desgracia.\n\nPorque al despertar, cada uno volvía a la vida que los dioses y los hombres ya les habían dado. Volvían a casas honestas o al menos habitables, a vínculos tejidos con años, con costumbres, con rutinas, con afectos reales aunque incompletos. Y esa era precisamente la herida más difícil. Si todo lo anterior hubiera sido miserable, el alma habría elegido con más facilidad. Pero no era así.",
  },

  // 15
  {
    type: "text",
    text: "Alerio quería, de una manera limpia y no romántica, a la mujer con la que compartía su vida. No deseaba herirla, ni convertir su bondad en daño. Y Myrina conocía también la complejidad de su propia prisión: no estaba retenida por el horror, sino por la duda, por el miedo, por la idea de que quizá una vida imperfecta seguía siendo más segura que una verdad demasiado grande.\n\nPor eso ninguno de los dos se atrevía a pedir al otro una locura.\n\nSe amaban, sí, pero con la contención terrible de los que saben todo lo que habría que romper para alcanzarse.",
  },

  // 16 — imagen-03
  {
    type: "image",
    image: "/images/imagen-03.jpg",
    imageCaption: "No podía tocarla. Pero las palabras permanecían.",
  },

  // 17
  {
    type: "text",
    text: "Alerio empezó entonces a escribir poemas.\n\nNo podía tocarla, no podía abrazarla, no podía cruzar todavía el mar que los separaba. Pero en el reino de Morfeo las palabras permanecían, y cada noche él le recitaba versos nacidos del tiempo despierto, cuando el deseo y la imposibilidad le pesaban más. Le hablaba de la higuera junto a su casa, del polvo rojo de los caminos en septiembre, de la culpa que le producía amar a una mujer a la que solo había besado en sueños. Le escribía como escriben los hombres que no buscan seducir, sino sobrevivir a lo que sienten.",
  },

  // 18
  {
    type: "text",
    text: "Y Myrina los guardaba en la memoria con una devoción casi sagrada.\n\nLe respondía no con poemas, sino con verdades. Le contaba que toda su vida había sentido que algo faltaba, pero nunca había sabido nombrarlo hasta encontrarlo en él. Le confesaba que el destino le parecía hermoso y cruel al mismo tiempo, porque le había mostrado su verdad cuando ya era tarde, cuando ambos pertenecían todavía, de una u otra manera, a otros caminos.",
  },

  // 19
  {
    type: "text",
    text: "Pasaron así muchas lunas.\n\nY cuanto más se amaban, más evidente se volvía que aquello no era un error ni un engaño del sueño. Era una llamada. Una línea escrita mucho antes. Una de esas raras veces en las que los dioses no crean el destino, sino que simplemente lo revelan.",
  },

  // 20
  {
    type: "text",
    text: "A veces Alerio pensaba en dejar atrás su vida y partir sin más hacia el otro extremo del mar, guiado solo por la fe en los sueños. Pero siempre se detenía al pensar en la herida que dejaría atrás. No podía abandonar a una mujer buena por una promesa que aún no sabía si los dioses permitirían volver carne. Amar a Myrina no lo había vuelto cobarde, pero sí más responsable. Quería alcanzarla, sí, pero no a costa de destruir injustamente a quien nunca le había hecho daño.",
  },

  // 21
  {
    type: "text",
    text: "Myrina, al otro lado del mundo, comprendía ese freno mejor que nadie. Y era precisamente eso lo que la hacía amarlo más: que no fuera un hombre arrastrado solo por el deseo, sino un hombre capaz de sostener el peso del amor sin ensuciar por ello lo que en él había de noble.\n\nLos dioses, que disfrutan tanto de la grandeza como del sufrimiento humano, siguieron concediéndoles el sueño, pero no el camino.",
  },

  // 22 — imagen-04
  {
    type: "image",
    image: "/images/imagen-04.jpg",
    imageCaption: "Empiezan a decidir por mí.",
  },

  // 23
  {
    type: "text",
    text: "Hasta que una noche Myrina llegó al jardín de Morfeo más triste que nunca.\n\nAlerio lo supo antes de que hablara. En el mundo de los sueños, el alma pesa más que las palabras.\n\n—¿Qué sucede? —le preguntó.\n\nElla lo miró largamente, como si quisiera grabarlo en sí misma.\n\n—Empiezan a decidir por mí —dijo—. Dicen que ya he esperado demasiado. Que una mujer no puede vivir siempre mirando al horizonte como si aguardara algo que no tiene nombre.",
  },

  // 23.5 — imagen-09 (Alerio de rodillas)
  {
    type: "image",
    image: "/images/imagen-09.jpg",
    imageCaption: "Si alguna vez encuentro el modo, no habrá mar ni noche que me detenga.",
  },

  // 24
  {
    type: "text",
    text: "Alerio sintió en el pecho una punzada tan aguda que por un instante odió al mar, a la distancia, a la prudencia y hasta a los propios dioses.\n\n—Ven conmigo —estuvo a punto de decir.\n\nPero no lo hizo.\n\nPorque amarla también era no empujarla hacia un vacío incierto si él mismo aún no sabía cómo llenar la distancia que los separaba.\n\nEn lugar de eso, cayó de rodillas ante ella y apoyó la frente en sus manos.\n\n—Si alguna vez encuentro el modo —dijo—, no habrá mar, ni noche, ni deber que me detenga. Pero no puedo pedirte que destruyas tu vida por un hombre que todavía solo sabe alcanzarte dormido.\n\nMyrina lloró entonces, no con desesperación, sino con esa forma silenciosa del dolor que aparece cuando una verdad hermosa no basta para salvarnos.\n\n—Lo sé —susurró—. Y precisamente por eso sé que eres tú.",
  },

  // 25
  {
    type: "text",
    text: "Cuentan que aquella noche Morfeo, conmovido al fin, llevó su súplica hasta Atenea. Y la diosa, que no concede favores al capricho pero sí escucha a quienes aceptan la verdad sin envilecerla, decidió intervenir. No para cambiar el destino, pues eso ni siquiera ella podía hacerlo, sino para darles valor suficiente para obedecerlo.\n\nNo les regaló un milagro. Les dio algo más difícil: claridad.",
  },

  // 25.5 — imagen-08 (Atenea interviene)
  {
    type: "image",
    image: "/images/imagen-08.jpg",
    imageCaption: "No les regaló un milagro. Les dio algo más difícil: claridad.",
  },

  // 26
  {
    type: "text",
    text: "En los meses que siguieron, tanto Alerio como Myrina despertaron con una certeza nueva, ya imposible de acallar. Comprendieron que el destino no siempre llega a tiempo, pero sigue siendo destino. Que no basta con reconocer la verdad en sueños si luego se la traiciona despierto. Que vivir sin herir a los demás no significa permanecer para siempre en una vida que no era la propia. Y que a veces la compasión exige dolor, pero nunca mentira.\n\nAlerio habló primero. No lo hizo con frialdad ni con impaciencia, sino con el respeto de quien agradece una vida compartida aunque sepa que no era la suya definitiva. Pidió perdón por la verdad tardía y dejó tras de sí no una traición, sino una pena limpia.",
  },

  // 27
  {
    type: "text",
    text: "Myrina hizo lo mismo. No habló desde el desprecio, porque nunca lo hubo. Habló desde la lucidez. Desde la fatiga de una vida sostenida junto a un hombre que no era perverso, pero sí incapaz de vencer sus propios vicios para habitar con plenitud el amor que tenía delante.\n\nY solo cuando ambos quedaron libres sin haber mancillado lo que antes habían vivido, Morfeo les retiró el don de los sueños.\n\nNo volvieron a encontrarse en el jardín.\n\nDurante un tiempo pensaron que habían sido castigados.",
  },

  // 28 — imagen-05
  {
    type: "image",
    image: "/images/imagen-05.jpg",
    imageCaption: "Como guiados por una mano que no se dejaba ver.",
  },

  // 29
  {
    type: "text",
    text: "Pero poco después, como guiados por una mano que no se dejaba ver, ambos emprendieron peregrinación hacia el gran santuario de Atenea, levantado en una isla sagrada entre sus dos mundos. Llegaron en días distintos. Él, al amanecer. Ella, cuando el sol comenzaba a caer.",
  },

  // 30
  {
    type: "text",
    text: "Y allí, por primera vez, se vieron despiertos.\n\nNo hubo sorpresa, porque ya se conocían. No hubo duda, porque el destino llevaba demasiado tiempo pronunciando sus nombres uno dentro del otro. Solo hubo un silencio inmenso, casi reverente, como si hasta las columnas del templo entendieran que hay encuentros que no pertenecen del todo a los hombres, sino también a algo anterior a ellos.",
  },

  // 31
  {
    type: "text",
    text: "Alerio sonrió primero.\n\nMyrina lloró primero.\n\nY dicen que Atenea apartó la vista con esa dignidad severa de las diosas sabias, fingiendo no emocionarse jamás por nada humano, mientras Morfeo cerraba para siempre el jardín donde ambos se habían amado dormidos.",
  },

  // 32 — imagen-06
  {
    type: "image",
    image: "/images/imagen-06.jpg",
    imageCaption: "Solo unos pocos, rarísimos y terribles, nacen primero en el alma.",
  },

  // 33
  {
    type: "text",
    text: "Desde entonces, en algunas costas antiguas se sigue contando que hay amores que nacen del deseo, otros de la costumbre y otros de la carne. Pero que solo unos pocos, rarísimos y terribles, nacen primero en el alma, porque ya habían sido escritos por el destino antes de que los cuerpos encontraran el camino.\n\nY que cuando eso ocurre, ni el mar basta para separarlos para siempre.",
  },

  // 34 — End
  {
    type: "end",
  },
];
