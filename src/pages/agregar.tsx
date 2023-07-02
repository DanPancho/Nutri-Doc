import { CrudService } from "@/services/crud";
import React from "react";

const agregar = () => {
  const { create } = CrudService();

  const dataAlimentos = {
    content: [
      {
        foods: [
          {
            name: "Uva",
            description:
              "Son fuentes alimentarias ricas en resveratrol, un componente importante por sus propiedades asociadas al reforzamiento del sistema inmune, reducción del estrés oxidativo y efecto antinflamatorio, dando como resultado efectos protectores frente a diabetes mellitus tipo 2, desordenes cardiovasculares, enfermedades neurovegetativas y cáncer.",
            recomendacion:
              "Su consumo es recomendado de 1 a 3 porciones al día , tomando en cuenta que una porción es de 10 unidades. Esto se respeta en dietas altas en fibra normocalóricas , pero disminuye a 5 unidades en dietas ligeramente hipocalóricas",
            imgsrc:
              "https://nutricionyfarmacia.com/blog/wp-content/uploads/2022/09/Uvas.jpg ",
          },
          {
            name: "Manzana",
            description:
              "En personas sanas , sin ninguna afeccion intestinal,esta fruta debe consumirse siempre con cascara para gozar de todos sus compuestos bioactivos que se encuentran más concentrados en la cascara y que gracias a su gran contenido de fibra, induce un efecto protector frente a procesos inflamatorias, aparte de aportar a una gran sensación de saciedad por su contenido de fibra.",
            recomendacion:
              "Su consumo es recomendado de 1 a 3 porciones al día , tomando en cuenta que una porción es de 1 unidad. Esto se respeta en ambos tipos de dietas.",
            imgsrc:
              "https://www.eluniversal.com.mx/resizer/sKgNbZ60oKmI0QOc6kS5bSyFoWU=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/AP23D6KPVRBUDISUNSPZ3PG5BI.jpg",
          },
          {
            name: "Durazno rojo",
            description:
              "Contienen más flavonoides que los duraznos blancos y amarillos y gracias a su contenido de fitoquímicos y a su gran acción antioxidante disminuyen el riesgo de enfermedades cardiovasculares y de padecer cáncer de estómago, pulmón, cavidad oral, faringe, endometrio, páncreas y colon.",
            recomendacion:
              "Su consumo es recomendado de 1 a 3 porciones al día , tomando en cuenta que una porción es de 1 unidad. Esto se respeta en ambos tipos de dietas.",
            imgsrc:
              "https://staticmer2.emol.cl/Fotos/2015/09/02/file_20150902095657.jpg",
          },
          {
            name: "Naranja",
            description:
              "En su composición también cabe destacar que es fuente de ácido ascórbico o vitamina C. También es fuente de folatos, que contribuyen a la formación normal de las células sanguíneas.Ambas frutas cuentan con vitamina A, cuentan con un efecto preventivo frente a la posible aparición de cánceres de boca, estómago, colon, broncopulmonar y de cuello uterino.",
            recomendacion:
              "Su consumo es recomendado de 1 a 3 porciones al día , tomando en cuenta que una porción es de 1 unidad. Esto se respeta en ambos tipos de dietas, evitando el consumo de jugos y prefiriendo su consumo de forma natural y entera",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW2ESDtzwvCvV5l6m8gyQd3-tv9UwaT4Uxtw&usqp=CAU",
          },
          {
            name: "Piña",
            description:
              "Esta fruta contiene una sustancia denominada bromelaína de efecto analgésico, además de contener propiedades antiinflamatorias y antitrombótico, es decir que reduce el riesgo de sufrir un ataque cardíaco, un accidente cerebrovascular y una obstrucción de arterias.",
            recomendacion:
              "Su consumo es recomendado de 2 porciones al día , tomando en cuenta que una porción es de 1 taza de 240 ml para ambas dietas.",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjw7styRiEyO25hIVPkSRLx-XvktZtb7fPKQ&usqp=CAU",
          },
          {
            name: "Frutilla",
            description:
              "La frutilla también posee varios compuestos bioactivos y elevada actividad antioxidante, que puede conferir importantes beneficios a la salud humana. Estudios muestran que presenta acción anticancerígena, anticoagulante y reduce enfermedades cardiovasculares, ademas de impedir el crecimiento de Salmonella y Staphylococcus.",
            recomendacion:
              "Su consumo es recomendado de 1 a 3 porciones al día , tomando en cuenta que una porción es de 10 unidades. Esto se respeta en ambos tipos de dieta",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYjdxzc-z4ewvnRzPbQmjxzbHTLdeJ_Bm6cw&usqp=CAU",
          },
          {
            name: "Limón",
            description:
              "Tiene actividad bactericida, impidiendo el crecimiento progresivo de bacterias patógenas, además de aportar una gran cantidad de vitamina C, que mejora la calidad y la absorción de hierro vegetal (el cual es de baja vegetal), por lo que es un excelente acompañante para sazonar las ensaladas. Además, la vitamina C está implicada en la producción del colágeno y tiene la propiedad de mejorar la cicatrización, y la función del sistema inmunitario.",
            recomendacion:
              "Su consumo es recomendado de 1 a 3 porciones al día , tomando en cuenta que una porción es de 1 unidad. Esto se respeta en ambos tipos de dietas.Ademas, se recomienda añadirlo a ensaladas para aumentar la calidad del hierro vegetal.",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1aCuj7EcWUVqFVa9Akd4Cr9QSGKkFfSDgHw&usqp=CAU",
          },
          {
            name: "Sandía",
            description:
              "Es una fruta con alto contenido de agua y antioxidantes como la vitamina C y el licopeno, que ayudan a proteger el cuerpo contra el estrés oxidativo, ayudando a la prevención de enfermedades cardiovasculares y de ciertos tipos de cáncer. Adicionalmente es una fuente rica en citrulina, un aminoácido que ayuda a dilatar los vasos sanguíneos, mejorando la función de los mismos y ayudando a la disminución de la presión arterial.",
            recomendacion:
              "Su consumo es recomendado de 1 a 3 porciones al día , tomando en cuenta que una porcion es de 1 taza de 240 ml para ambas dietas.",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTAUsh-aPkRRhecFOZiDmDH9r0T6aOXK5B9w&usqp=CAU",
          },
          {
            name: "Papaya",
            description:
              "La papaya es una excelente fuente de vitamina C, vitamina A, vitamina E y folato. También contiene minerales como el potasio, el magnesio y el calcio, así como antioxidantes y fibra dietética, ayudando a prevenir o mejorar el estreñimiento y a fortalecer el sistema inmunológico. Además, contiene papaína, una enzima que ayuda a la descomposición de las proteínas, mejorando su digestibilidad.",
            recomendacion:
              "Su consumo es recomendado de 1 a 3 porciones al día en dietas saludables , altas en fibra , sin embargo en dietas ligeramente hipocaloricas se recomienda una porcion de esta fruta. Se debe recalcar que una porción de la misma equivale a 10 unidades",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXW9kE3W2eZjtHzvZ7rDgfEYKqrKwOQ1asJA&usqp=CAU",
          },
          {
            name: "Pitahaya con pulpa Roja",
            description:
              "Aparte de ser de bajo valor calórico, en su composición destaca el contenido de vitamina C, vitamina que interviene en la formación de colágeno, glóbulos rojos, huesos y dientes, además de favorecer en la resistencia a las infecciones, absorción del hierro de los alimentos y tener acción antioxidante. En informes recientes se ha reportado a la pitahaya como fuente de alimento para la flora bacteriana en el colon, promoviendo el crecimiento y la actividad de las bacterias benéficas del colon, mejorando la salud intestinal.",
            recomendacion:
              "Su consumo es recomendado de una a tres porciones al día , tomando en cuenta que una porcion es de 1 unidad en dietas normocaloricas altas en fibra y de media unidad en dietas ligeramente hipocaloricas.",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfc2w3r5qxI0cFckU9TgkSrEuiggd6V5Im_A&usqp=CAU",
          },
          {
            name: "Plátano de Seda",
            description:
              "El plátano de seda es una excelente fuente de potasio, la cual evita espasmos musculares post ejercicio, disminuye la presión arterial y reduce el riesgo de accidentes cerebrovasculares. Esta fruta, además contiene el 41% del requerimiento necesario de vitamina B6 al día, ayudando a mejorar el humor para personas con depresión y síndrome pre-menstrual debido la produccion de neurotransmisores como serotonina. En su estado inmaduro , el plátano de seda es rico en almidón y en su etapa madura es rico en fructosa, por lo que en objetivos de pérdida de masa grasa, es consumirlo mientras no esta moteado.",
            recomendacion:
              "Su consumo es recomendado de 1 a 3 porciones al día , tomando en cuenta que una porción es de 1/2 unidad en dietas normocaloricas altas en fibra y de 1/3 de unidad en dietas ligeramente hipocaloricas.",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2_Oaz0P2zD6UXBpMYsyu19anZzcROLVC8A&usqp=CAU",
          },
          {
            name: "Ciruela",
            description:
              "Se le atribuye propiedades antioxidantes y antiinflamatorias, además de que gracias contenido de fibra y sorbitol, una sustancia con efecto laxante. La ciruela, posee antioxidantes, como los polifenoles, que ayudan a proteger el cuerpo contra el daño de los radicales libres, logrando contribuir a la reducción del riesgo de enfermedades crónicas y al envejecimiento celular.",
            recomendacion:
              "Su consumo es recomendado de 1 a 3 porciones al día , tomando en cuenta que una porción es de 2 unidades en dietas normocaloricas altas en fibra y de una unidad en dietas ligeramente hipocaloricas",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7XSpXxQtTYX6013_WbHGfmYOqMiNetxtpYA&usqp=CAU",
          },
          {
            name: "Kiwi",
            description:
              "Es una fruta rica en vitamina C, que fortalece el sistema inmunológico, ayuda en la absorción de hierro y promueve la salud de la piel. Además, es una excelente fuente de fibra, que favorece la salud digestiva y contribuye a la regulación del azúcar en la sangre.",
            recomendacion:
              "Su consumo es recomendado de 1 a 3 porciones al día , tomando en cuenta que una porción es de 1 unidad , lo cual se respeta en ambos tipos de dieta.",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQjAfVMSv0rvTIJl97anIxiSC29qJZKjXSg&usqp=CAU",
          },
          {
            name: "Mango",
            description:
              "Es una fruta tropical que proporciona vitamina C, vitamina A y antioxidantes, los cuales protegen las células del daño oxidativo, fortalecen el sistema inmunológico y promueven la salud visual.",
            recomendacion:
              "Su consumo es recomendado de 1 a 3 porciones al día , tomando en cuenta que una porción es de 1 unidad mediana en dietas normocaloricas altas en fibra y de media unidad en dietas ligeramente hipocaloricas.",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy0jno-rormVwL706IxtuzDMGG-gwsxJBDMQ&usqp=CAU",
          },
          {
            name: "Pera",
            description:
              "Es una fruta baja en calorías y rica en fibra, lo que la convierte en una opción excelente para mantener la saciedad, regular el tránsito intestinal y mejorar la salud digestiva en general.",
            recomendacion:
              "Su consumo es recomendado de 1 a 3 porciones al día , tomando en cuenta que una porción es de 1 unidad. Esto se respeta en ambos tipos de dietas.",
            imgsrc: "https://www.herbazest.com/imgs/d/8/7/551784/pera.jpg",
          },
          {
            name: "Mora",
            description:
              "Es una fruta cargada de antioxidantes, fibra y vitamina C, que promueven la salud cardiovascular, fortalecen el sistema inmunológico y favorecen la función cognitiva.",
            recomendacion:
              "Su consumo es recomendado de 1 a 3 porciones al dia , tomando en cuenta que una porción es de 10 unidades. Esto se respeta en ambos tipos de dieta",
            imgsrc:
              "https://www.maxionline.ec/wp-content/uploads/2019/10/Revista-Maxi-mora-la-baya-mas-versatil.jpg",
          },
          {
            name: "Mortiño",
            description:
              "Es rico en antioxidantes, especialmente antocianinas, que ayudan a proteger el cuerpo contra el daño causado por los radicales libres y a prevenir enfermedades crónicas como el cáncer y enfermedades cardíacas. Además, es una fuente de vitamina C, que fortalece el sistema inmunológico y promueve la salud de la piel. . ",
            recomendacion:
              "Su consumo es recomendado de 1 a 3 porciones al día , tomando en cuenta que una porción es de 1 taza. Esto se respeta en ambos tipos de dietas.",
            imgsrc:
              "https://www.cocina-ecuatoriana.com/base/stock/Post/11-image/11-image_web.jpg",
          },
          {
            name: "Arándanos",
            description:
              "Son ricos en antioxidantes, especialmente flavonoides, que ayudan a proteger el cuerpo contra el estrés oxidativo. También son bajos en calorías y ricos en fibra, lo que los convierte en una opción ideal para promover la salud digestiva y el control del peso. Los arándanos también se han asociado con beneficios para la salud cerebral, como la mejora de la memoria y la función cognitiva.",
            recomendacion:
              "Su consumo es recomendado de 1 a 3 porciones al día , tomando en cuenta que una porción es de 1 taza. Esto se respeta en ambos tipos de dietas.",
            imgsrc:
              "https://nutricionyfarmacia.com/blog/wp-content/uploads/2022/07/Arandanos.jpg.webp",
          },
        ],
        title: "Frutas",
      },
      {
        foods: [
          {
            name: "Espinaca",
            description:
              "La espinaca es una fuente excelente de vitaminas K, A, C y ácido fólico. También es rica en manganeso y vitamina B2.Ademas, contiene altas cantidades de betacarotenos, luteina y zeaxantina, los cuales estan relacionados con propiedades antiinflamatorias, mejora de la salud visual, y como cofactores de enzimas que participan en la síntesis de colágeno, carnitina y neurotransmisores.",
            recomendacion:
              "Su consumo recomendado es de 3 porciones al día , tomando en cuenta que una porción es de 1/2 taza de 240 ml de este vegetal cocido para ambos tipos de dieta.",
            imgsrc:
              "https://ichef.bbci.co.uk/news/624/amz/worldservice/live/assets/images/2014/10/24/141024134827_spinach_624x351_thinkstock.jpg",
          },
          {
            name: "Vainita",
            description:
              "Son una rica fuente de antioxidantes y vitaminas, en las que destacan el retinol, B6, C y proteínas como lisina, un aminoácido esencial para la absorción ideal de minerales como calcio, hierro, fósforo y zinc.",
            recomendacion:
              "Su consumo recomendado es de 3 porciones al día , tomando en cuenta que una porción es de 1/2 taza de 240 ml de este vegetal cocido para ambos tipos de dieta. ",
            imgsrc:
              "https://elcomercio.pe/resizer/LifXlWZ_IDHUZlQzc_yUEWUqAEE=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/T7KUPHLAFBGA7KV4GHDPAOADIQ.jpg",
          },
          {
            name: "Apio",
            description:
              "El apio es rico en una variedad de nutrientes como vitaminas, minerales, compuestos aromáticos, flavonoides y antioxidantes, además de tener un bajo contenido calórico, por lo que es un excelente alimento antiinflamatorio que ayuda a promover una buena digestion, un peso saludable,mantener la presion arterial bajo control y mantener la salud cardiovascular",
            recomendacion:
              "Su consumo recomendado es de 3 porciones al día , tomando en cuenta que una porción es de 1 taza de 240 ml de este vegetal fresco para ambos tipos de dieta. ",
            imgsrc:
              "https://www.semana.com/vida-moderna/articulo/asi-se-prepara-el-apio-para-eliminar-el-dolor-en-las-articulaciones-y-limpiar-el-estomago/202334",
          },
          {
            name: "Pepinillo",
            description:
              "Bajo en calorías y fuente de vitamina K y potasio. Contiene antioxidantes con propiedades antiinflamatorias y beneficia la digestión",
            recomendacion:
              "Su consumo recomendado es de 3 porciones al día , tomando en cuenta que una porción es de 1 unidad mediana de este vegetal fresco para ambos tipos de dieta. ",
            imgsrc:
              "https://www.recetasnestle.com.ec/sites/default/files/inline-images/que-es-el-pepino.jpg",
          },
          {
            name: "Zucchini",
            description:
              "Es un vegetal rico en vitaminas y minerales, como vitamina C y potasio, que son importantes para el sistema inmunológico y la función muscular. Además, su contenido de fibra promueve una digestión saludable, y su bajo contenido calórico lo convierte en una opción ideal para el control del peso. También proporciona antioxidantes que pueden ayudar a proteger contra el estrés oxidativo y el envejecimiento celular.",
            recomendacion:
              "Su consumo recomendado es de 3 porciones al día , tomando en cuenta que una porción es de 1 taza de 240 ml de este vegetal fresco o 1/2 taza si se lo coce, para ambos tipos de dieta.",
            imgsrc:
              "https://www.eatingwell.com/thmb/JzGjQzn92ZLQ3F-uGg3fnfJiE_g=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/5084643-e9f4caee248a4fb493102dfeb0808599.jpg",
          },
  
          {
            name: "Lechuga",
            description:
              "Es un vegetal con propiedad hidratante, pues presenta un contenido de agua del 90 al 95%. Es rica en fibra y antioxidantes, lo cual favorece a la salud intestinal y al fortalecimiento del sistema inmunologico. Por otro lado, proporciona minerales como el fósforo, hierro, calcio, potasio y vitaminas como la A, C, E, B1, B2, B3, B9 y K, protegiendo la salud visual y ayudando a combatir daños por radicales libres.",
            recomendacion:
              "Su consumo recomendado es de 3 porciones al día, tomando en cuenta que una porción es de 1 taza de 240 ml de este vegetal fresco para ambos tipos de dieta. ",
            imgsrc:
              "http://www.frutas-hortalizas.com/img/fruites_verdures/presentacio/53.jpg",
          },
  
          {
            name: "Zanahoria amarilla",
            description:
              "Su contenido de vitamina A promueve la salud visual y contribuye al mantenimiento de una piel saludable. Además, es una fuente de fibra dietética, lo que favorece la salud digestiva y ayuda a mantener un peso saludable. Las zanahorias amarillas también contienen otros nutrientes como vitamina C, potasio y antioxidantes que fortalecen el sistema inmunológico y protegen contra el daño celular causado por los radicales libres.",
            recomendacion:
              "Su consumo recomendado es de 3 porciones al día , tomando en cuenta que una porción es de 1 taza de 240 ml de este vegetal fresco o 1/2 taza si se lo coce, para ambos tipos de dieta. ",
            imgsrc:
              "https://elpoderdelconsumidor.org/wp-content/uploads/2021/05/zanahorias.png",
          },
          {
            name: "Pimiento Rojo ",
            description:
              "El pimiento rojo es rico en vitamina C, vitamina A y antioxidantes que promueven la salud de la piel, fortalecen el sistema inmunológico y protegen contra el daño celular. Además, su contenido de fibra y vitamina B6 contribuye a la salud cardiovascular y al metabolismo de los nutrientes.",
            recomendacion:
              "Su consumo recomendado es de 3 porciones al dia , tomando en cuenta que una porción es de 1 taza de 240 ml de este vegetal fresco o 1/2 taza si se lo coce, para ambos tipos de dieta. ",
            imgsrc:
              "https://s.yimg.com/ny/api/res/1.2/13Ny5dRr4RdoHfNP7HGUCg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTg3NDtjZj13ZWJw/https://s.yimg.com/os/es-US/blogs/onda-verde-/Pimiento_rojo_1.jpg",
          },
  
          {
            name: "Pimiento Verde",
            description:
              "El pimiento verde es una excelente fuente de vitamina C y antioxidantes que fortalecen el sistema inmunológico, mejoran la salud cardiovascular y promueven la salud visual. También contiene fibra, lo que favorece la digestión y ayuda a mantener un peso saludable",
            recomendacion:
              "Su consumo recomendado es de 3 porciones al día , tomando en cuenta que una porción es de 1 taza de 240 ml de este vegetal fresco o 1/2 taza si se lo coce, para ambos tipos de dieta. ",
            imgsrc:
              "https://images.ecestaticos.com/zrnn-OQEgMyH3rfrGQGiJwsqzqA=/83x7:1189x837/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fb3f%2F44f%2Fb78%2Fb3f44fb78cb461c36132864ae42275e1.jpg",
          },
          {
            name: "Col Morada",
            description:
              "El consumo de col ofrece varios beneficios para la salud, ya que es una buena fuente de vitamina C, vitamina K y fibra. Estos nutrientes fortalecen el sistema inmunológico y ayudan a mantener una buena salud intestinal .Sin embargo, su consumo excesivo puede producir flatulencias esto debido a sus compuestos de azufre y fibra, por lo que no está recomendado en personas con problemas intestinales y digestivos",
            recomendacion:
              "Su consumo recomendado es de tres porciones al día , tomando en cuenta que una porcion es de 1/2 taza de 240 ml de este vegetal cocido para ambos tipos de dieta. ",
            imgsrc:
              "https://images.ecestaticos.com/zrnn-OQEgMyH3rfrGQGiJwsqzqA=/83x7:1189x837/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fb3f%2F44f%2Fb78%2Fb3f44fb78cb461c36132864ae42275e1.jpg",
          },
          {
            name: "Coliflor ",
            description:
              "La coliflor es una buena fuente de vitamina C, vitamina K y fibra. Sus compuestos antioxidantes y antiinflamatorios ayudan a combatir el estrés oxidativo y la inflamación en el cuerpo. Sin embargo, esta contraindicado su consumo en casos de flatulencias,sensibilidad digestiva o trastornos como el síndrome del intestino irritable",
            recomendacion:
              "Su consumo recomendado es de tres porciones al día , tomando en cuenta que una porción es de 1/2 taza de 240 ml de este vegetal cocido para ambos tipos de dieta. ",
            imgsrc:
              "https://s3.ppllstatics.com/diariovasco/www/multimedia/202110/05/media/coli.jpg",
          },
  
          {
            name: "Brócoli",
            description:
              "Es una excelente fuente de vitaminas, minerales y antioxidantes, como la vitamina C, la vitamina K, el ácido fólico y el sulforafano, logrando: fortalecer el sistema inmunológico, mejorar la función cerebral y proteger al organismo contra el daño celular. El brócoli también contiene fibra, lo que favorece una digestión saludable y ayuda en el control del peso. Este alimento, es seguro y beneficioso para la mayoría de las personas, pero se debe tener precaución en casos de hipotiroidismo,alergias, flatulencias y consumo de anticoagulantes",
            recomendacion:
              "Su consumo recomendado es de 3 porciones al día , tomando en cuenta que una porcion es de 1/2 taza de 240 ml de este vegetal cocido para ambos tipos de dieta. ",
            imgsrc:
              "https://elpoderdelconsumidor.org/wp-content/uploads/2016/11/brocoli.jpg",
          },
  
          {
            name: "Tomate riñón ",
            description:
              "Es una excelente fuente de licopeno, un antioxidante que se ha asociado con la reducción del riesgo de enfermedades cardiovasculares y ciertos tipos de cáncer, como el de próstata. Además, los tomates riñón son ricos en vitamina C, vitamina A y potasio, lo que fortalece el sistema inmunológico, promueve la salud visual y contribuye al equilibrio electrolítico. También son bajos en calorías y contienen fibra, lo que favorece la salud digestiva y el control del peso. ",
            recomendacion:
              "Su consumo recomendado es de 3 porciones al día , tomando en cuenta que una porción es de 1 unidad de este vegetal para ambos tipos de dieta",
            imgsrc:
              "https://www.imporalaska.com/uploads/cache/4/40/408/408a/pic-1549256422-1549256476-408aa7be171b00aa536245b44074bf72.jpg",
          },
          {
            name: "Brotes de alfalfa",
            description:
              "Los brotes de alfalfa contienen una variedad de fitonutrientes beneficiosos para la salud, incluyendo flavonoides, cumarinas, fitoesteroles y saponinas. Los flavonoides son compuestos antioxidantes que reducen el riesgo de enfermedades crónicas como enfermedades del corazón y ciertos tipos de cáncer. Las cumarinas tienen propiedades antiinflamatorias y pueden ayudar a reducir la formación de coágulos sanguíneos. Los fitoesteroles son compuestos vegetales que pueden ayudar a reducir los niveles de colesterol LDL. Por último, las saponinas tienen propiedades inmunomoduladoras, por lo que ayudan a combatir el cáncer y regular los niveles de azúcar en la sangre. ",
            recomendacion:
              "Su consumo recomendado es de 3 porciones al día , tomando en cuenta que una porción es de 1 taza de 240 ml de este vegetal fresco para ambos tipos de dieta. ",
            imgsrc:
              "https://comerbeber.com/archivos/styles/xlarge/public/imagen/2020/03/brotes-alfalfa-sprouts-cv_1200.jpg?itok=jVoCk5Zd",
          },
          {
            name: "Espárragos",
            description:
              "Son bajos en calorías y ricos en fibra, lo que los convierte en una opción ideal para el control del peso y la salud digestiva. Además, los espárragos son una excelente fuente de vitaminas, como la vitamina K, la vitamina C y el ácido fólico, que desempeñan un papel vital en la salud ósea, la función inmunológica y el desarrollo fetal saludable. También contienen antioxidantes, que ayudan a proteger el cuerpo contra el daño celular y el envejecimiento prematuro. Los espárragos también tienen propiedades antiinflamatorias y pueden ayudar a reducir el riesgo de enfermedades crónicas",
            recomendacion:
              "Su consumo recomendado es de 1 a 2 porciones al día , tomando en cuenta que una porción es de 3 unidades de este vegetal para ambos tipos de dieta",
            imgsrc:
              "https://s1.ppllstatics.com/diariovasco/www/multimedia/202106/09/media/cortadas/esparragos-kuyG-U140644297105BKI-624x385@Diario%20Vasco.jpg",
          },
          {
            name: "Champiñones",
            description:
              "Los champiñones son una fuente natural de zinc, un mineral esencial para numerosas funciones en el cuerpo. El zinc presente en los champiñones ayuda a fortalecer el sistema inmunológico, promoviendo una respuesta inmunitaria saludable y protegiendo contra enfermedades y infecciones. También desempeña un papel crucial en la síntesis de proteínas y el crecimiento celular, lo que contribuye al desarrollo y reparación de tejidos. ",
            recomendacion:
              "Su consumo recomendado es de 2 a 3 porciones al día , tomando en cuenta que una porción es de 1 taza de 240 ml de este vegetal para ambos tipos de dieta. ",
            imgsrc: "https://img2.rtve.es/i/?w=1600&i=1675766601503.jpg",
          },
          {
            name: "Tomate Cherry",
            description:
              "Son bajos en calorías y ricos en nutrientes, como vitamina C, vitamina A y antioxidantes, que ayudan a fortalecer el sistema inmunológico y proteger el cuerpo contra el daño celular. Además, contienen licopeno, un antioxidante que se ha relacionado con la reducción del riesgo de enfermedades cardíacas y ciertos tipos de cáncer. Los tomates cherry también son una buena fuente de fibra, lo que promueve la salud digestiva y ayuda a mantener un peso saludable",
            recomendacion:
              "Su consumo recomendado es de 2 a 3 porciones al día, tomando en cuenta que una porción es de 1 taza de 240 ml de este vegetal para ambos tipos de dieta. ",
            imgsrc:
              "https://mejorconsalud.as.com/wp-content/uploads/2022/08/tabla-tomate-cherry-768x576.jpg?auto=webp&quality=60&width=1920&crop=16:9,smart,safe",
          },
          {
            name: "Rábano",
            description:
              "Contienen compuestos fitoquímicos, como los isotiocianatos, que se han relacionado con propiedades antiinflamatorias y anticancerígenas. Los rábanos también pueden tener efectos diuréticos y ayudar a promover la salud renal al estimular la eliminación de toxinas a través de la orina. Sin embargo su consumo de forma cruda esta contraindicado en hipotiroidismo.",
            recomendacion:
              "Su consumo recomendado es de 2 a 3 porciones al día , tomando en cuenta que una porción es de 1/2 taza de 240 ml de este vegetal para ambos tipos de dieta. ",
            imgsrc:
              "https://s3.abcstatics.com/media/bienestar/2021/05/26/rabano-ficha-koJC--1248x698@abc.jpg",
          },
          {
            name: "Cebolla Perla grande",
            description:
              "Es una buena fuente de vitaminas y minerales, como la vitamina C, vitamina B6, manganeso y potasio, que son esenciales para la salud del sistema inmunológico, la producción de energía y el equilibrio de líquidos en el cuerpo. Además, su sabor distintivo puede mejorar el perfil de sabor de una amplia variedad de platos, lo que promueve la diversidad y el disfrute en la alimentación",
            recomendacion:
              "Su consumo recomendado es de 2 a 3 porciones al día , tomando en cuenta que una porción es de 1/2 taza de 240 ml de este vegetal para ambos tipos de dieta. ",
            imgsrc:
              "http://www.cebollaelblog.com/wp-content/uploads/2010/03/374207_7079-1024x769.jpg",
          },
        ],
        title: "Verduras",
      },
      {
        foods: [
          {
            name: "Pollo",
            description:
              "La carne de pollo es una fuente de proteína de alto valor biológico, al ser rica en aminoácidos esenciales como lisina, a su vez, es fuente de niacina, hierro, zinc, fósforo y potasio . Además, aporta bajos contenidos de ácidos grasos saturados y una adecuada cantidad de ácidos grasos de las familias omega 6 y omega 3.",
            recomendacion:
              "Su consumo recomendado es de 3 a 4 veces por semana , tomando en cuenta que una porción de consumo es de un filete de pechuga de pollo del porte de la palma de la mano o 1 presa sin piel, para ambas dietas.",
            imgsrc:
              "https://definicion.de/wp-content/uploads/2013/05/pollo-1.jpg",
          },
          {
            name: "Carne molida de res baja en grasa",
            description:
              "Es una excelente fuente de proteína de alto valor biologico, las cuales son esenciales para el crecimiento y reparación de tejidos, así como para el mantenimiento de una masa muscular saludable. Al ser baja en grasa, proporciona una opción más saludable en comparación con las carnes más grasas, lo que puede contribuir a mantener niveles de colesterol y triglicéridos saludables. Además, la carne molida baja en grasa es rica en nutrientes como hierro, zinc y vitaminas del complejo B, que son esenciales para el metabolismo energético, la función cognitiva y el sistema inmunológico.",
            recomendacion:
              "Su consumo recomendado es de 1 a 2 veces por semana , tomando en cuenta que una porción de consumo es de 3 bolitas pequeñas para ambas dietas.",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgOkVn9Ca9iH8za9LdV79PUr65akbYAEyJ55A98l_asnPZtkai2-upR6mhMXb-M9t77fM&usqp=CAU",
          },
          {
            name: "Carne de Res",
            description:
              "Es una buena fuente de proteínas de alta calidad y nutrientes como el hierro, el zinc y las vitaminas del grupo B. Estos nutrientes son esenciales para la formación y reparación de tejidos, así como para el funcionamiento adecuado del sistema inmunológico y nervioso. Además, la carne roja proporciona una forma altamente absorbible de hierro llamada hierro hemo, que es especialmente beneficioso para prevenir la anemia. Sin embargo su consumo debe ser limitado porque aumenta el acido urico en sangre y su alto consumo esta relaciondo con estreñimiento y cancer.",
            recomendacion:
              "Su consumo recomendado es de 1 a 2 veces por semana , tomando en cuenta que una porción de consumo es de un filete del porte de la palma de la mano para ambas dietas.",
            imgsrc:
              "https://www.gob.mx/cms/uploads/article/main_image/37481/carne1.jpg",
          },
          {
            name: "Lomo de cerdo",
            description:
              "La carne de lomo de cerdo puede ser beneficiosa para el control de peso debido a varias razones. En primer lugar, el lomo de cerdo es una carne magra, lo que significa que tiene un bajo contenido de grasa en comparación con otros cortes de cerdo más grasos. Además, el lomo de cerdo es una excelente fuente de proteínas de alto valor biologico, clave para el mantenimiento, construcccion y reparación de tejidos musculares. Ademas es cardio protector gracias a su aporte de lipoproteinas HDL (colesterol bueno) y aporta efecto saciante.",
            recomendacion:
              "Su consumo recomendado es de 3 veces por semana , tomando en cuenta que una porción de consumo es de un filete del porte de la palma de la mano para ambas dietas",
            imgsrc:
              "https://cdn2.salud180.com/sites/default/files/styles/16x9_medium/public/field/image/2019/11/receta_de_lomo_de_cerdo_bien_jugoso_y_bajo_en_colesterol_para_la_cena_de_navidad.jpg",
          },
          {
            name: "Pescado Dorado",
            description:
              "Es una excelente fuente de proteínas de alta calidad, que son esenciales para la construcción y reparación de tejidos en el cuerpo. Además, el pescado dorado es una buena fuente de vitaminas y minerales, como la vitamina D, el selenio y el yodo, que son importantes para la salud ósea, el sistema inmunológico y la función tiroidea adecuada.",
            recomendacion:
              "Su consumo recomendado es de 2 a 4 veces por semana , tomando en cuenta que una porción de consumo es de un filete del porte de la palma de la mano para ambas dietas",
            imgsrc:
              "https://storage.ning.com/topology/rest/1.0/file/get/10779575883?profile=RESIZE_400x&width=360",
          },
          {
            name: "Corvina",
            description:
              "Entra dentro de la clasificacion de pescados blancos ,destacando su alto contenido en vitamina D y minerales como potasio, calcio, fósforo, hierro y yodo. Ademas de ser una buena fuente de selenio, un mineral esencial con propiedades antioxidantes que ayuda a proteger las células del daño oxidativo.",
            recomendacion:
              "Su consumo recomendado es de 2 a 4 veces por semana , tomando en cuenta que una porción de consumo es de un filete del porte de la palma de la mano para ambas dietas",
            imgsrc:
              "https://www.cocinacaserayfacil.net/wp-content/uploads/2020/09/Corvina-a-la-plancha-con-verduras-salteadas.jpg",
          },
          {
            name: "Atún",
            description:
              "Es una excelente fuente de proteínas de alta calidad y es una fuente de ácidos grasos omega-3, que tienen efectos beneficiosos para la salud cardiovascular, como la reducción de los niveles de triglicéridos en la sangre. Sin embargo, es importante tener en cuenta que con sumir atun en lata disminuye el contenido de acidos grasos omega 3 del alimento , y si se lo consume en agua, tambien disminuye su contenido calorico original.",
            recomendacion:
              "Su consumo recomendado es de 3 veces por semana , tomando en cuenta que una porción de consumo es de una lata de coserva en lata, para ambas dietas",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuJwEHVI_U-GrP_1G8mHOFjR40P-gONZPJH9j5UqPr6L_YPaeAyJhwMp2MjnUklw23yjo&usqp=CAU",
          },
          {
            name: "Trucha",
            description:
              "La trucha es la especie que provee el mayor aporte de ácidos grasos omega 3, especialmente ácido docosahexaenoico ( DHA) y de fósforo, que tienen efectos beneficiosos para la salud cardiovascular, como la reducción de los niveles de triglicéridos en la sangre, la disminución de la presión arterial y la mejora de la función de los vasos sanguíneos. Estos ácidos grasos también son importantes para el desarrollo y funcionamiento del cerebro y el sistema nervioso.",
            recomendacion:
              "Su consumo recomendado es de 2 a 4 veces por semana , tomando en cuenta que una porción de consumo es de un filete del porte de la palma de la mano para ambas dietas",
            imgsrc:
              "https://cdn0.recetasgratis.net/es/posts/8/5/7/trucha_al_horno_con_patatas_55758_600.webp",
          },
          {
            name: "Salmón",
            description:
              "Es el pescado con menor cantidad de agua, hecho que repercute en una mayor concentración de nutrientes por porción , lo que lo hace una fuente importante de ácidos grasos omega-3, particularmente de ácido eicosapentaenoico (EPA) y de ácido docosahexaenoico ( DHA). El consumo de EPA se asocia con la protección de la salud cardiovascular debido a que ejerce efectos hipotrigliceridémicos, hipocolesterolémicos y antiinflamatorios. ",
            recomendacion:
              "Su consumo recomendado es de 2 a 4 veces por semana , tomando en cuenta que una porción de consumo es de un filete del porte de la palma de la mano para ambas dietas",
            imgsrc:
              "https://www.cucinare.tv/wp-content/uploads/2020/06/Salm%C3%B3n-rosado.jpg",
          },
          {
            name: "Huevo",
            description:
              "Aporta proteínas de elevado valor biológico, ricas en aminoácidos esenciales, que podrían promover la síntesis y mantención de la masa muscular del cuerpo. Ademas, la evidencia científica actual sugiere que el consumo de 1 huevo diario, no tiene un impacto significativo en el riesgo cardiovascular para la mayoría de las personas sanas y no eleva el colesterol en sangre. Además, se ha demostrado que los huevos son una excelente fuente de nutrientes esenciales, como vitaminas B12, D, A y colina, y también contienen antioxidantes como la luteína y la zeaxantina, que son beneficiosos para la salud visual.",
            recomendacion:
              "Su consumo recomendado es diario , tomando en cuenta que una porción de consumo es de 1 unidad para ambas dietas.",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtAC_p8_nkhSllLE5SAcva-6oHTJmhSIQliVREI0kcfPvGowvaPvakc7QHIbaiww_grCU&usqp=CAU",
          },
          {
            name: "Clara de Huevo",
            description:
              "La clara de huevo es una excelente fuente de proteínas de alta calidad. Contiene los aminoácidos esenciales necesarios para la síntesis de proteínas en el cuerpo, lo que la convierte en una opción ideal para el desarrollo y la reparación muscular. Además, la clara de huevo es baja en grasas y calorías, lo que la hace adecuada para aquellos que buscan controlar su ingesta calórica y mantener un peso saludable. También es rica en vitaminas del complejo B, como la vitamina B12 y la biotina, que son importantes para el metabolismo energético y la salud del cabello y las uñas.",
            recomendacion:
              "Su consumo recomendado es diario , tomando en cuenta que una porción de consumo es de 2 unidades para ambas dietas",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpCgEKPOm5fZ2zWSwI3xf66AXmx8n09TLNx4MwDCbWGmQVemeI9FpMclGEezSZpezURck&usqp=CAU",
          },
        ],
        title: "Proteínas",
      },
      {
        foods: [
          {
            name: "Yogurt Natural semidescremado",
            description:
              "Es una excelente fuente de proteínas, calcio y otros nutrientes esenciales. El consumo regular de yogurt natural semidescremado puede ayudar a fortalecer los huesos, mantener una buena salud muscular y promover un sistema inmunológico saludable. Además, su contenido probiótico favorece la salud digestiva al equilibrar la flora intestinal y mejorar la digestión.",
            recomendacion:
              "Su consumo es recomendado es de 1 porción al día , tomando en cuenta que una porción es 240 ml, lo cual se respeta para ambas dietas",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFWKH3TunY9zPGMQt7BML39c8COaDTMmSdDeTgz9y5KNIzWb_lRVRRnjhliCT7X6tCPM4&usqp=CAU",
          },
          {
            name: "Yogurt griego",
            description:
              "El yogurt griego se diferencia del yogurt descremado en su proceso de elaboración y contenido nutricional, pues, este ultimo resulta en una textura más espesa y cremosa por su mayor contenido de proteínas y grasas en comparación con el yogurt descremado, lo que ayuda a mantener la saciedad y contribuye al desarrollo y reparación de los tejidos musculares.",
            recomendacion:
              "Su consumo es recomendado es de 1 porción al día , tomando en cuenta que una porción es de 200 ml, lo cual se respeta para ambas dietas",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT88iFgtp1kCGySrxmXiDOhhTde1VEZ1FAwEBPhSPGYqJ7eK5iB_UgzQSe21Km3j5nPO_o&usqp=CAU",
          },
          {
            name: "Queso ricota",
            description:
              "La ricota se elabora a partir del suero de la leche y tiene una textura suave y granulosa. Es un queso bajo en grasa y calorías, pero rico en proteínas de alta calidad, lo que lo convierte en una opción popular para aquellos que buscan mantener un equilibrio en su ingesta de nutriente",
            recomendacion:
              "Su consumo es recomendado es de 1 porción al día , tomando en cuenta que una porción es de 1 rebanada de 4 dedos de la mano, lo cual se respeta para ambas dietas",
            imgsrc:
              "https://www.dietistasnutricionistas.es/wp-content/uploads/2020/09/caracteristicas-nutricionales-del-queso-ricotta-696x463.jpg",
          },
          {
            name: "Queso mozzarella bajo en grasa",
            description:
              "Contiene menos grasa y calorías en comparación con la mozzarella regular,pero manteniendo la misma sensacion de saciedad, lo que la convierte en una opción adecuada para aquellos que desean controlar su ingesta de grasas. A pesar de tener menos grasa, sigue siendo una buena fuente de proteínas de alta calidad, que son esenciales para el crecimiento y reparación de los tejidos.",
            recomendacion:
              "Su consumo es recomendado es de 1 porción al día , tomando en cuenta que una porción es de 1 rebanada de 4 dedos de la mano, lo cual se respeta para ambas dietas",
            imgsrc:
              "https://quesosmanzer.es/wp-content/uploads/2018/01/noticia-normal_2-200x155.jpg",
          },
          {
            name: "Queso fresco",
            description:
              "Es una excelente fuente de proteínas de alta calidad, necesarias para el crecimiento y reparación de los tejidos. Además, es rico en vitamina A y la vitamina B12, calcio, fundamental para la salud ósea y dental, así como en minerales como el fósforo y el zinc. Por otro lado, su bajo contenido de grasa y calorías lo convierte en una opción adecuada para aquellos que buscan controlar su peso.",
            recomendacion:
              "Su consumo es recomendado es de 1 porción al día , tomando en cuenta que una porción es de 1 rebanada de 4 dedos de la mano, lo cual se respeta para ambas dietas",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE-OrYPG2B4Ib22esMFArMM5fQ6mT20v7AYNzNlMRa5r4By1zoxxOFhTdH4MXt1yHWwTo&usqp=CAU",
          },
          {
            name: "Leche de vaca semidescremada",
            description:
              "Tiene menos grasa que la leche entera, por lo que es una alternativa adecuada para aquellos que buscan reducir su ingesta de grasas saturadas y proporciona una variedad de nutrientes importantes, como el calcio, fundamental para la salud ósea y dental, así como vitaminas como la vitamina D, que ayuda a absorber el calcio. Además, la leche semidescremada es una fuente de otros nutrientes esenciales, como las vitaminas B2 y B12, el fósforo y el potasio",
            recomendacion:
              "Su consumo es recomendado es de 1 porción al día , tomando en cuenta que una porción es 240 ml, lo cual se respeta para ambas dietas",
            imgsrc:
              "https://biotrendies.com/wp-content/uploads/2015/07/leche.jpg",
          },
          {
            name: "Leche de Almendra",
            description:
              "La leche de almendra es una opción popular para aquellos que buscan una alternativa láctea no animal. Es naturalmente baja en calorías y grasas saturadas, lo que la convierte en una opción adecuada para aquellos que siguen una dieta baja en grasas. Además, la leche de almendra es rica en vitamina E, un antioxidante que contribuye a la salud de la piel y el sistema inmunológico.",
            recomendacion:
              "Su consumo es recomendado es de 2 porciones al día , tomando en cuenta que una porción es 240 ml, lo cual se respeta para ambas dietas",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlyrKKH0zTz87NbND6mEf5hST90Pnu7a5S1EKSoEvLExJSmku0g8BetWXXKR-x2tOcjjo&usqp=CAU",
          },
          {
            name: "Leche de chocho",
            description:
              "Es una opción popular para aquellos que buscan una alternativa láctea no animal Es rica en fibra y baja en grasas saturadas, lo que la hace beneficiosa para la salud cardiovascular. Además, la leche de chocho contiene calcio, hierro y ácidos grasos omega-3, que son importantes para la salud ósea, la formación de células sanguíneas y la función cerebral.",
            recomendacion:
              "Su consumo es recomendado es de 2 porciones al día , tomando en cuenta que una porción es 240 ml, lo cual se respeta para ambas dietas",
            imgsrc:
              "https://img-global.cpcdn.com/recipes/3d46486fc8757630/1360x964cq70/leche-de-tarwi-foto-principal.webp",
          },
          {
            name: "Leche de coco",
            description:
              "Contiene grasas saludables, como los ácidos grasos de cadena media, que se metabolizan de manera diferente en el cuerpo y pueden proporcionar una fuente rápida de energía. También es rica en minerales como el magnesio y el potasio, que son importantes para la función muscular y el equilibrio de líquidos.",
            recomendacion:
              "Su consumo es recomendado es de 2 porciones al día , tomando en cuenta que una porción es 240 ml, lo cual se respeta para ambas dietas",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo0K7Fd3fuRt1oLN1QqNi9LXEBoUuuJ5qSJPfOFKbXxqjpyD92Na4YyBdvxwbXpIZ2H90&usqp=CAU",
          },
          {
            name: "Leche de arroz",
            description:
              "La leche de arroz es una opción libre de lactosa y gluten, por lo que es adecuada para personas con intolerancias o alergias. Aunque es baja en proteínas en comparación con otras leches vegetales, es rica en carbohidratos y vitaminas del grupo B. Además, la leche de arroz tiene un sabor suave y dulce, lo que la convierte en una opción agradable",
            recomendacion:
              "Su consumo es recomendado es de 2 porciones al día , tomando en cuenta que una porción es 240 ml, lo cual se respeta para ambas dietas",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScIfQdQnyj34QBKVeZhDy1cCA39dXiaxiOfxWisd1shNP-DlQvrbbfRmB83HOXv-hgTHo&usqp=CAU",
          },
          {
            name: "Leche de soja",
            description:
              "Contiene grasas saludables, como los ácidos grasos de cadena media, que se metabolizan de manera diferente en el cuerpo y pueden proporcionar una fuente rápida de energía. También es rica en minerales como el magnesio y el potasio, que son importantes para la función muscular y el equilibrio de líquidos.",
            recomendacion:
              "Su consumo es recomendado es de 2 porciones al día , tomando en cuenta que una porción es 240 ml, lo cual se respeta para ambas dietas",
            imgsrc:
              "https://www.recetas-japonesas.com/base/stock/Recipe/12-image/12-image_web.jpg.webp",
          },
        ],
        title: "Lácteos",
      },
      {
        foods: [
          {
            name: "Tortillas de trigo integrales",
            description:
              "Al estar hechas con harina de trigo integral, conservan el salvado y el germen, lo que las convierte en una fuente rica de fibra dietética. La fibra ayuda a regular el tránsito intestinal, promueve la saciedad y contribuye a mantener niveles saludables de azúcar en la sangre. Además, las tortillas de trigo integrales contienen nutrientes como vitaminas B, magnesio y zinc, que desempeñan un papel importante en el metabolismo energético.",
            recomendacion:
              "Su consumo recomendado es de 1 a 2 veces al día , tomando en cuenta que una porción es de 2 tortillas al dia en dietas normocaloricas altas en fibra y 1 tortilla en dietas ligeramente hipocaloricas",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXrJrNgmEiEIRYCdknpl2_6ckZyq0xVt8c6m09K-a9vG2uo6Vo0Bw9DqD_oRAPnU_2Vk8&usqp=CAU",
          },
          {
            name: "Galletas de sal bajas en grasa",
            description:
              "Estas galletas suelen tener menos grasa y sodio en comparación con las versiones regulares, lo que puede ayudar a reducir la ingesta de calorías y controlar la presión arterial. Sin embargo, es importante tener en cuenta que incluso las galletas bajas en grasa y sal aún pueden contener calorías, por lo que se debe tener cuidado con las porciones y la frecuencia de consumo. ",
            recomendacion:
              "Su consumo recomendado es de 1 a 2 veces al día , tomando en cuenta que una porción es de 4 galletas medianas para ambas dietas",
            imgsrc:
              "https://www.reviewbox.com.mx/wp-content/uploads/2019/10/galleta-salada-destacada-1024x683.jpg",
          },
          {
            name: "Pan blanco de rodaja bajo en grasa",
            description:
              "Contienen menos grasa y calorías en comparación con el pan regular, lo que puede ayudar a reducir la ingesta calórica total. Además, el pan bajo en grasa a menudo contiene menos grasas saturadas, que están relacionadas con un mayor riesgo de enfermedades cardiovasculares. Sin embargo, es importante tener en cuenta que el pan bajo en grasa puede contener otros ingredientes procesados o aditivos para compensar la reducción de grasa, lo que podría afectar su calidad nutricional.",
            recomendacion:
              "Su consumo recomendado es de 1 a 2 veces al día , tomando en cuenta que una porción es de 2 rebanadas al dia en dietas normocaloricas altas en fibra y 1 rebanada en dietas ligeramente hipocaloricas",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz__Po4tmlxfVBnP7ZE5BTvhedqaH1eA16bqClg4dytdqzamOIjL1bBbKvHOQjI43AfgQ&usqp=CAU",
          },
          {
            name: "Pan integral de rodaja bajo en grasa",
            description:
              "El pan integral se elabora con harina de grano entero, lo que significa que conserva la fibra y los nutrientes esenciales presentes en el grano, como vitaminas, minerales y antioxidantes. La fibra contenida en el pan integral ayuda a mantener la saciedad y controlar el apetito, lo que puede ser beneficioso para reducir la ingesta calórica total. Es importante leer las etiquetas de los productos y seleccionar aquellos que tengan ingredientes mínimamente procesados y un contenido moderado de grasa.",
            recomendacion:
              "Su consumo recomendado es de 1 a 2 veces al dia , tomando en cuenta que una porción es de 2 rebanadas al dia en dietas normocaloricas altas en fibra y 1 rebanada en dietas ligeramente hipocaloricas",
            imgsrc:
              "https://media.istockphoto.com/id/1035478932/es/foto/rebanada-de-pan-integral.jpg?s=612x612&w=is&k=20&c=re6qB13cpLlbUY9Pd8Mc5JATYyVpDFbg8PWdxLwJadc=",
          },
          {
            name: "Arroz Blanco",
            description:
              "Es bajo en grasa y colesterol, lo que puede ser beneficioso para aquellos que siguen una dieta baja en grasas. También es fácilmente digerible, lo que lo convierte en una opción adecuada para personas con problemas digestivos o sensibilidad gastrointestinal. El arroz blanco también es libre de gluten, lo que lo hace apto para personas con enfermedad celíaca o sensibilidad al gluten. ",
            recomendacion:
              "Su consumo recomendado es de 1 a 2 veces al día , tomando en cuenta que una porción es de 1 taza de 240 ml en ambos tipos de dieta",
            imgsrc:
              "https://www.recetasderechupete.com/wp-content/uploads/2019/08/Arroz-blanco.jpg",
          },
          {
            name: "Arroz integral",
            description:
              "El arroz integral conserva la capa externa del grano, lo que le proporciona un mayor contenido de fibra, vitaminas y minerales. La fibra presente en el arroz integral ayuda a mantener la saciedad, regular el tránsito intestinal y controlar los niveles de azúcar en la sangre. Además, el arroz integral es rico en nutrientes como magnesio, manganeso y vitaminas del complejo B. Estos nutrientes son esenciales para el metabolismo energético, la función cerebral y la salud ósea",
            recomendacion:
              "Su consumo recomendado es de 1 a 2 veces al día , tomando en cuenta que una porción es de 1 taza de 240 ml en ambos tipos de dieta",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7l-F4O88XIUipo3E4kO84HHQDx3vKTRaRiQ0-ZGTOoMAJ9JK2D7G9Fno_Whh4ncMsf_I&usqp=CAU",
          },
          {
            name: "Pasta Integral",
            description:
              "Son una buena fuente de fibra y de carbohidratos complejos, que proporcionan energía sostenida y son más nutritivos que los carbohidratos refinados. También son ricos en nutrientes como magnesio, hierro y vitaminas del complejo B. Estos nutrientes son esenciales para la función celular, la producción de energía y la salud general",
            recomendacion:
              "Su consumo recomendado es de 1 a 2 veces al día , tomando en cuenta que una porcion es de 1 taza de 240 ml en ambos tipos de dieta",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_W9iT1kzV_LN0q4Z9OR505ok57AsZtO81rsnMpVEXDSjQuC1nzYdgNbsuoyJMWiRrP0A&usqp=CAU",
          },
          {
            name: "Quinua",
            description:
              "Es una fuente de fibra y de nutrientes como hierro, magnesio, fósforo y vitaminas del complejo B. La quinua es naturalmente libre de gluten y tiene un bajo índice glucémico, lo que la convierte en una opción saludable para personas con intolerancia al gluten o para mantener niveles estables de azúcar en la sangre. Además, la quinua contiene antioxidantes que protegen contra el daño celular y el envejecimiento prematuro.",
            recomendacion:
              "Su consumo recomendado es de 1 a 2 veces al día , tomando en cuenta que una porción es de 1/2 taza de 240 ml en ambos tipos de dieta",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1m2R9YjYVX4GMubKW4GHpg2mSuZ0nFhTXTFgKhrnetoV0n5gL6_N30crcEWfQeRMC3Yg&usqp=CAU",
          },
          {
            name: "Avena",
            description:
              "Es alta en energia, ademas de ser rica en fibra soluble, lo que ayuda a reducir el colesterol LDL y a mantener un corazón saludable. También es una fuente de proteínas de origen vegetal, lo que la convierte en una opción ideal para los vegetarianos y veganos. Además, la avena es rica en antioxidantes, como la avenantramida, que tienen propiedades antiinflamatorias y pueden ayudar a proteger contra enfermedades crónicas. La avena también ayuda a regular los niveles de azúcar en la sangre, lo que la convierte en una opción favorable para las personas con diabetes",
            recomendacion:
              "Su consumo recomendado es de 1 a 2 veces al día , tomando en cuenta que una porción es de 4 cucharadas en dietas normocaloricas altas en fibra y 2 cucharadas en dietas ligeramente caloricas",
            imgsrc:
              "https://okdiario.com/img/vida-sana/2016/11/22/avena-hojuelas.jpg",
          },
          {
            name: "Choclo",
            description:
              "Contiene antioxidantes como la luteína y el zeaxantina, que son beneficiosos para la salud visual y pueden ayudar a prevenir enfermedades oculares relacionadas con la edad. También es rico en vitaminas del complejo B, como la tiamina y el ácido fólico, que son esenciales para el funcionamiento adecuado del sistema nervioso y la producción de glóbulos rojos",
            recomendacion:
              "Su consumo recomendado es de 1 a 3 veces al dia , tomando en cuenta que una porción es de 1 unidad mediana para ambos tipos de dieta ",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ6DZyZ0hpuwCnUKaJFAbwjhfoLjf4rKUSxA0Dj2iBXo5fuByh6hLrtj9D7WEW_qRLCd4&usqp=CAU",
          },
          {
            name: "Tortillas crocantes de arroz integral",
            description:
              "Al estar hechas con arroz integral, son una fuente de carbohidratos complejos que proporcionan energía sostenida y son más ricas en fibra que las tortillas de harina blanca. La fibra ayuda a mantener la saciedad, promover la salud digestiva y regular los niveles de azúcar en la sangre. Además, el arroz integral es una fuente de vitaminas del complejo B, como tiamina, niacina y ácido fólico, que son esenciales para el metabolismo energético y el funcionamiento del sistema nervioso.",
            recomendacion:
              "Su consumo recomendado es de 1 a 2 veces al día , tomando en cuenta que una porción es de 4 tortillas para ambas dietas",
            imgsrc:
              "https://gullon.es/wp-content/uploads/desayuno_tortitas_arroz.jpg",
          },
          {
            name: "Harina de Trigo",
            description:
              "Es una fuente rica en carbohidratos, que son la principal fuente de energía para el cuerpo. También contiene proteínas y una pequeña cantidad de grasas",
            recomendacion:
              "Su consumo recomendado es de 1 a 2 veces al día , tomando en cuenta que una porción es de 2 cucharadas para ambas dietas",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCSiKwtU3v42Ufs1sVaWKW1CxSeOSpkwjXl3LgqxVn3wMyzUCc8QjcRBHjjqdnmfZnsp8&usqp=CAU",
          },
        ],
        title: "Panes y cereales",
      },
      {
        foods: [
          {
            name: "Papas con cáscara",
            description:
              "La cáscara contienefibra, antioxidantes, como la vitamina C y los polifenoles, que ayudan a proteger las células del daño oxidativo y fortalecer el sistema inmunológico. La papa con cáscara también es una buena fuente de potasio, un mineral importante para el equilibrio de los líquidos corporales y la salud del sistema cardiovascular. Además, la cáscara de la papa contiene vitaminas del complejo B, como la vitamina B6, que son esenciales para el metabolismo y el funcionamiento adecuado del sistema nervioso.",
            recomendacion:
              "Su consumo recomendado es de tres porciones al día , tomando en cuenta que una porción es de 2 unidades para dietas normocalóricas altas en fibra y de 1 unidad en dietas ligeramente hipocalóricas",
            imgsrc:
              "https://okdiario.com/img/recetas/2016/03/potatos-1141657_1280.jpg",
          },
          {
            name: "Zanahoria Blanca",
            description:
              "Contiene antioxidantes y fibra como los carotenoides, que protegen las células del daño oxidativo y fortalecen el sistema inmunológico. La zanahoria blanca también es una excelente fuente de vitamina C, beneficiosa para la salud de la piel, el sistema inmunológico y la producción de colágeno. Además, su contenido en minerales como el potasio contribuye al equilibrio de líquidos y al buen funcionamiento cardiovascular",
            recomendacion:
              "Su consumo recomendado es de 2 porciones al día , tomando en cuenta que una porción es de 1/2 taza de 240 ml de este tubérculo cocido para ambos tipos de dieta. ",
            imgsrc:
              "https://www.laylita.com/recetas/wp-content/uploads/2021/12/Apio-criollo-arracacha-o-zanahoria-blanca-1024x683.jpg",
          },
          {
            name: "Yuca",
            description:
              "Contiene compuestos beneficiosos como la fibra dietética, que ayuda a reducir los niveles de colesterol y controlar la presión arterial. La mandioca también es una fuente de potasio, un mineral esencial para mantener un ritmo cardíaco regular y controlar la presión arterial. Además, contiene antioxidantes que protegen las células del estrés oxidativo y la inflamación, factores de riesgo para enfermedades cardiovasculares.",
            recomendacion:
              "Su consumo recomendado es de tres porciones al día , tomando en cuenta que una porción es de 1/2 taza de 240 ml de este tuberculo cocido para ambos tipos de dieta. ",
            imgsrc: "https://unareceta.com/wp-content/uploads/2016/10/yuca.jpg",
          },
          {
            name: "Camote",
            description:
              "Es rico en fibra,antioxidantes, como la vitamina C y los carotenoides, que protegen las células del daño oxidativo y fortalecen el sistema inmunológico. También es una buena fuente de vitamina A, esencial para la salud ocular y el mantenimiento de una piel saludable. El camote contiene minerales como el potasio, que contribuye al equilibrio de líquidos y al funcionamiento adecuado del sistema cardiovascular. Además, su contenido de vitamina B6 y magnesio promueve la salud del sistema nervioso y muscular",
            recomendacion:
              "Su consumo recomendado es de tres porciones al día , tomando en cuenta que una porción es de 2 unidades para dietas normocalóricas altas en fibra y de 1 unidad en dietas ligeramente hipocalóricas",
            imgsrc:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/5aday_sweet_potato.jpg/250px-5aday_sweet_potato.jpg",
          },
          {
            name: "Melloco",
            description:
              "Es rico en antioxidantes como los polifenoles, que protegen las células del daño oxidativo y fortalecen el sistema inmunológico. También es una buena fuente de vitamina C, que promueve la salud de la piel y refuerza el sistema inmunológico. El melloco contiene minerales como el hierro y el calcio, esenciales para la formación de glóbulos rojos y la salud ósea. Además, su bajo contenido calórico lo convierte en una opción adecuada para mantener un peso saludable",
            recomendacion:
              "Su consumo recomendado es de tres porciones al día, tomando en cuenta que una porción es de 10 unidades para ambos tipos de dieta",
            imgsrc:
              "https://debuenamesa.files.wordpress.com/2011/07/ollucosmellocos-de-buena-mesa.jpg?w=470&h=230",
          },
          {
            name: "Remolacha",
            description:
              "Es una buena fuente de fibra, antioxidantes y compuestos bioactivos que pueden ayudar a fortalecer el sistema inmunologico, mejorar la salud cardiovascular e intestinal, reducir la presión arterial , promover una función cerebral saludable y mejorar el rendimiento deportivo y la resistencia física gracias a su contenido de nitratos. Sin embargo, es importante tener en cuenta que el consumo excesivo de remolacha puede provocar cambios en el color de la orina o las deposiciones.",
            recomendacion:
              "Su consumo recomendado es de tres porciones al día , tomando en cuenta que una porción es de 1/2 taza de 240 ml de este vegetal cocido para ambos tipos de dieta. ",
            imgsrc:
              "https://www.pequerecetas.com/wp-content/uploads/2017/11/remolacha.jpg",
          },
          {
            name: "Mashua",
            description:
              "La mashua ha demostrado tener propiedades diuréticas y puede ayudar a promover la eliminación de toxinas a través de la orina, lo que contribuye a la salud de los riñones. En cuanto a sus propiedades anticancerígenas, se ha descubierto que la mashua contiene compuestos bioactivos, como los flavonoides y las saponinas, que han mostrado actividad anticancerígena.",
            recomendacion:
              "Su consumo recomendado es de tres porciones al día , tomando en cuenta que una porción es de 2 unidades para dietas normocalóricas altas en fibra y de 1 unidad en dietas ligeramente hipocalóricas",
            imgsrc:
              "https://policlinicocontinental.pe/web/wp-content/uploads/2018/07/mashua.jpg",
          },
          {
            name: "Jícama",
            description:
              "Desempeña un papel importante en la prevención de enfermedades crónicas no transmisibles. Al ser baja en calorías y grasas, puede ayudar a mantener un peso saludable, previniendo la obesidad, diabetes tipo 2 y enfermedades cardíacas. Su alto contenido de fibra promueve la salud digestiva y ayuda a controlar los niveles de azúcar en la sangre. ",
            recomendacion:
              "Su consumo recomendado es de tres porciones al día , tomando en cuenta que una porción es de 2 unidades para dietas normocalóricas altas en fibra y de 1 unidad en dietas ligeramente hipocalóricas",
            imgsrc:
              "https://elpoderdelconsumidor.org/wp-content/uploads/2017/11/jicama.jpg",
          },
          {
            name: "Taro",
            description:
              "Es rico en carbohidratos complejos, que son una fuente de energía de liberación lenta. Esto significa que proporciona una energía sostenida y ayuda a mantener niveles estables de glucosa en sangre. Adicionalmente,es una excelente fuente de fibra dietética, tanto soluble como insoluble, ayudando a promover la saciedad temprana y a prevenir el estreñimiento",
            recomendacion:
              "Su consumo recomendado es de tres porciones al día , tomando en cuenta que una porción es de 1/2 taza de 240 ml de este tuberculo cocido para ambos tipos de dieta",
            imgsrc:
              "https://gastronomadas.com.mx/wp-content/uploads/2021/08/ice-balls-8.png",
          },
          {
            name: "Nabo",
            description:
              "Es bajo en calorías y rico en fibra, lo que promueve la saciedad y ayuda a mantener un peso saludable. Además, el nabo es una buena fuente de vitamina C, que fortalece el sistema inmunológico y favorece la salud de la piel. Contiene compuestos fitoquímicos como los glucosinolatos, que pueden tener propiedades antioxidantes y antiinflamatorias.",
            recomendacion:
              "Su consumo recomendado es de tres porciones al día , tomando en cuenta que una porción es de 2 unidades para ambas dietas",
            imgsrc:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Turnip_2622027.jpg/250px-Turnip_2622027.jpg",
          },
        ],
        title: "Tubérculos",
      },
      {
        foods: [
          {
            name: "Fréjol Negro",
            description:
              "El frejol negro se destaca por su alto contenido de fibra, que promueve la salud digestiva y mantiene niveles saludables de colesterol. Además, es rico en antioxidantes, que protegen el cuerpo contra los radicales libres y el estrés oxidativo",
            recomendacion:
              "Su consumo recomendado es de 3 veces por semana , tomando en cuenta que una porción en una dieta normocalórica alta en fibra es de 1 taza de 240 ml y en dietas ligeramente hipocalóricas es de 1/2 taza de 240 ml. ",
            imgsrc:
              "https://thefoodtech.com/wp-content/uploads/2020/05/frijol-negro.jpg",
          },
          {
            name: "Fréjol Rojo",
            description:
              "Es rico en antioxidantes y vitaminas del complejo B, lo que ayuda a fortalecer el sistema inmunológico y mejorar la salud cardiovascular",
            recomendacion:
              "Su consumo recomendado es de 3 veces por semana , tomando en cuenta que una porción en una dieta normocalórica alta en fibra es de 1 taza de 240 ml y en dietas ligeramente hipocalóricas es de 1/2 taza de 240 ml",
            imgsrc: "https://elfruton.com/img/p/1/8/1/181-large_default.jpg",
          },
          {
            name: "Fréjol Blanco",
            description:
              "Es una excelente fuente de proteínas, fibra y minerales como el calcio y el magnesio, lo que promueve la salud ósea y muscular. También tiene un bajo contenido de grasa y es beneficioso para mantener un peso saludable.",
            recomendacion:
              "Su consumo recomendado es de 3 veces por semana , tomando en cuenta que una porción en una dieta normocalórica alta en fibra es de 1 taza de 240 ml y en dietas ligeramente hipocalóricas es de 1/2 taza de 240 ml",
            imgsrc:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Phaseolus_vulgaris_white_beans%2C_witte_boon.jpg/750px-Phaseolus_vulgaris_white_beans%2C_witte_boon.jpg",
          },
          {
            name: "Lenteja",
            description:
              "Las lentejas son una fuente rica en fibra, proteina vegetal y nutrientes claves para la salud inmunológica, como el hierro, el zinc, el selenio y las vitaminas del complejo B. Estos nutrientes fortalecen el sistema inmunológico, ayudando a proteger el cuerpo contra enfermedades y promoviendo un funcionamiento óptimo del sistema de defensa del organismo.",
            recomendacion:
              "Su consumo recomendado es de 3 veces por semana , tomando en cuenta que una porción en una dieta normocalórica alta en fibra es de 1 taza de 240 ml y en dietas ligeramente hipocalóricas es de 1/2 taza de 240 ml",
            imgsrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYdb_df1xC3fBpMv3xLASfZP09sdFL8ET1tHL7zzRD4dNoRv9k7Deio8oIPcdDIv4hN5U&usqp=CAU",
          },
          {
            name: "Arveja verde",
            description:
              "Son beneficiosas para prevenir el desarrollo de cáncer y el envejecimiento prematuro. Son ricas en antioxidantes, como la vitamina C y otros compuestos vegetales, que ayudan a neutralizar los radicales libres y proteger las células del daño oxidativo, reduciendo así el riesgo de cáncer y los signos de envejecimiento prematuro. Además son ricas en vitaminas y minerales, como vitamina C, vitamina K y vitamina A.",
            recomendacion:
              "Su consumo recomendado es de 3 veces por semana , tomando en cuenta que una porción es de 1/2 taza en ambos tipos de dieta.",
            imgsrc:
              "https://elcomercio.pe/resizer/MWLX7O5PXAWuisGzBJDMikEGcQo=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/V7R7ZZ2KERBUDH4QELNMOPMUMQ.jpg",
          },
          {
            name: "Arveja amarilla",
            description:
              "Difieren de las arvejas verdes por su falta de clorofila y tambien en su sabor , pero son una excelente fuente de proteínas vegetales, fibra dietética y una variedad de vitaminas y minerales. La arveja amarilla es rica en vitamina C, que fortalece el sistema inmunológico, y en vitamina K, que contribuye a la salud ósea y ayuda en la coagulación sanguínea.",
            recomendacion:
              "Su consumo recomendado es de 3 veces por semana , tomando en cuenta que una porción es de 1/2 taza en ambos tipos de dieta.",
            imgsrc:
              "https://es.123rf.com/photo_58839012_primas-org%C3%A1nicas-arvejas-amarillas-en-un-taz%C3%B3n.html",
          },
          {
            name: "Habas",
            description:
              "Son muy ricas en fibra, y contienen ácido fólico, hidratos de carbono complejos, proteínas, provitamina A, entre otros, por lo que ofrecen beneficios anticancerígenos y efectos beneficiosos para la salud. Son ricas en fibra, lo que ayuda a regular el tránsito intestinal y reduce el riesgo de cáncer colorrectal. Además, contienen fitoquímicos antioxidantes y antiinflamatorios, que protegen las células del daño y reducen el riesgo de varios tipos de cáncer. ",
            recomendacion:
              "Su consumo recomendado es de 3 veces por semana , tomando en cuenta que una porción en una dieta normocalórica alta en fibra es de 1 taza de 240 ml y en dietas ligeramente hipocalóricas es de 1/2 taza de 240 ml",
            imgsrc:
              "https://elpoderdelconsumidor.org/wp-content/uploads/2017/05/habas.jpg",
          },
          {
            name: "Garbanzo",
            description:
              "Los garbanzos son una excelente fuente de fibra y contienen fitoquímicos como los flavonoides y los ácidos fenólicos, que actúan como antioxidantes y antiinflamatorios, protegiendo las células del daño y reduciendo el riesgo de varios tipos de cáncer.Ademas son ricos en folato, una vitamina B esencial para la salud celular y la prevención de anomalías genéticas relacionadas con el cáncer. ",
            recomendacion:
              "Su consumo recomendado es de 3 veces por semana , tomando en cuenta que una porción en una dieta normocalórica alta en fibra es de 1 taza de 240 ml y en dietas ligeramente hipocalóricas es de 1/2 taza de 240 ml",
            imgsrc:
              "https://www.prensalibre.com/wp-content/uploads/2019/07/shutterstock_469595090.jpg?quality=52&w=760&h=430&crop=1",
          },
          {
            name: "Soja",
            description:
              "Es una excelente fuente de proteínas vegetales de alta calidad, que son esenciales para el crecimiento y reparación celular. Además, contiene fitoquímicos, como los fitoestrógenos, que pueden tener efectos protectores contra enfermedades cardiovasculares, menopausia y algunos tipos de cáncer, como el de mama y próstata. Sin embargo, es importante tener en cuenta que algunas personas pueden tener alergia a la soja y que los productos de soja no fermentados pueden interferir con la absorción de ciertos nutrientes, como el hierro y el zinc.",
            recomendacion:
              "Su consumo recomendado es de 2 veces por semana , tomando en cuenta que una porción es de 1 taza para ambos tipos de dieta",
            imgsrc:
              "https://www.cuerpomente.com/medio/2022/07/15/beneficios-soja-como-consumirla_c2200c62_1200x1200.jpg",
          },
          {
            name: "Chocho",
            description:
              "Es una excelente fuente de proteínas vegetales y de alto contenido de fibra, lo que ayuda a promover una buena digestion y a favorecer la saciedad. También es bajo en grasas saturadas y contiene una variedad de minerales como hierro, calcio y magnesio, que son importantes para la salud ósea y muscular. ",
            recomendacion:
              "Su consumo recomendado es de 3 veces por semana , tomando en cuenta que una porción en una dieta normocalórica alta en fibra es de 1 taza de 240 ml y en dietas ligeramente hipocalóricas es de 1/2 taza de 240 ml",
            imgsrc:
              "https://www.planv.com.ec/sites/default/files/chochos-planv-img_5611.jpg",
          },
        ],
        title: "Leguminosas",
      },
      {
        foods: [
          {
            name: "Aguacate",
            description:
              "Es una fuente de grasas saludables, como los ácidos grasos monoinsaturados, que ayudan a reducir el colesterol LDL y promover un corazón saludable. También es rico en fibra, lo que contribuye a la salud digestiva, y contiene antioxidantes que protegen las células del daño oxidativo.",
            recomendacion:
              "Su consumo recomendado es de 1 ves al día , tomando en cuenta que una porción es de 1/2 unidad para una dieta normocalórica alta en fibra y 1/4 de unidad en dietas ligeramente hipocalóricas",
            imgsrc:
              "https://www.recetasnestlecam.com/sites/default/files/inline-images/mitad-de-aguacate.jpg",
          },
          {
            name: "Almendras",
            description:
              "Son un alimento nutritivo que aporta múltiples beneficios. Son una excelente fuente de vitamina E, un antioxidante que protege las células contra el estrés oxidativo. También contienen grasas saludables, fibra y proteínas, lo que las convierte en un snack saciante y contribuye a mantener niveles de azúcar en sangre estables.",
            recomendacion:
              "Su consumo recomendado es de 1 ves al día , tomando en cuenta que una porción es de 15 unidades para una dieta normocalórica alta en fibra y 10 unidades en dietas ligeramente hipocalóricas",
            imgsrc:
              "https://www.lavanguardia.com/files/image_948_465/uploads/2021/03/05/604204064a61a.jpeg",
          },
          {
            name: "Nueces",
            description:
              "Ayudan a reducir la inflamación y mejorar la función de los vasos sanguíneos. Además, las nueces contienen antioxidantes, como la vitamina E, que ayudan a proteger las células del daño oxidativo. Consumir nueces regularmente también se ha asociado con una disminución del riesgo de enfermedades cardíacas, incluyendo enfermedades del corazón y accidentes cerebrovasculares",
            recomendacion:
              "Su consumo recomendado es de 1 ves al día , tomando en cuenta que una porción es de 15 unidades para una dieta normocalórica alta en fibra y 10 unidades en dietas ligeramente hipocalóricas",
            imgsrc:
              "https://phantom-elmundo.unidadeditorial.es/0e8f9bd5e33398ff67b119b40447a92b/crop/0x0/3072x2048/resize/473/f/webp/assets/multimedia/imagenes/2022/01/04/16413064087771.jpg",
          },
          {
            name: "Pistacho",
            description:
              "Son ricos en grasas insaturadas y antioxidantes, que pueden ayudar a reducir el riesgo de enfermedades cardíacas. Además, son una buena fuente de proteínas, fibra, vitaminas y minerales, lo que las convierte en un bocadillo nutritivo y beneficioso para la salud.",
            recomendacion:
              "Su consumo recomendado es de 1 ves al día , tomando en cuenta que una porción es de 15 unidades para una dieta normocalórica alta en fibra y 10 unidades en dietas ligeramente hipocalóricas",
            imgsrc:
              "https://c8i5i9x9.stackpathcdn.com/download/bancorecursos/ingredientes/Ingrediente-pistacho.jpg",
          },
  
          {
            name: "Semillas de Linaza",
            description:
              "Es una semilla rica en ácidos grasos omega-3 y fibra dietética. El consumo regular de linaza puede ayudar a reducir los niveles de colesterol LDL, mejorar la salud cardiovascular y promover la regularidad intestinal. También contiene lignanos, compuestos vegetales con propiedades antioxidantes y fitoestrógenas que pueden tener beneficios para la salud hormonal.",
            recomendacion:
              "Su consumo recomendado es de 1 a 2 veces al día , tomando en cuenta que una porción es de 2 cucharadas colmadas en ambas dietas",
            imgsrc:
              "https://s1.eestatic.com/2020/04/14/ciencia/nutricion/semillas-dietas-vegetales_482462232_150264122_1706x960.jpg",
          },
          {
            name: "Semillas de Chía",
            description:
              "Son una fuente concentrada de nutrientes. Son ricas en fibra, ácidos grasos omega-3, proteínas y antioxidantes. El consumo de chía puede ayudar a mantener la saciedad, regular los niveles de azúcar en la sangre y mejorar la salud cardiovascular.",
            recomendacion:
              "Su consumo recomendado es de 1 a 2 veces al día , tomando en cuenta que una porción es de 2 cucharadas colmadas en ambas dietas",
            imgsrc:
              "https://www.paulinacocina.net/wp-content/uploads/2022/03/chia-800x625.jpg",
          },
  
          {
            name: "Aceite de Oliva",
            description:
              "El aceite de oliva es rico en grasas monoinsaturadas, especialmente ácido oleico, que ha demostrado tener efectos beneficiosos para la salud cardiovascular al reducir el colesterol LDL y aumentar el colesterol HDL. También es una fuente de antioxidantes, como la vitamina E y los polifenoles, que protegen las células del daño oxidativo y tienen propiedades antiinflamatorias",
            recomendacion:
              "Su consumo recomendado es de 2 veces al día , tomando en cuenta que una porción es de 4 cucharaditas al dia en dietas normocalóricas altas en fibra y 3 cucharaditas en dietas ligeramente hipocalóricas",
            imgsrc:
              "https://images.ecestaticos.com/wci8ca02NcfapCxnZ6ZjNHZY-rw=/3x89:1696x1043/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F071%2Fe1a%2F4ec%2F071e1a4ecde3fb1a62b449152a3cf312.jpg",
          },
          {
            name: "Chocolate negro semiamargo sin azúcar",
            description:
              "Es rico en antioxidantes, como los flavonoides, que ayudan a proteger las células del daño causado por los radicales libres. También contiene compuestos que pueden mejorar el estado de ánimo y promover la salud cardiovascular.",
            recomendacion:
              "Su consumo recomendado es de 1 vez al día , tomando en cuenta que una porción es de 3 cucharaditas o cuadros de tableta, en dietas normocalóricas altas en fibra y 2 cucharaditas o cuadros de tableta en dietas ligeramente hipocalóricas",
            imgsrc:
              "https://editorialtelevisa.brightspotcdn.com/dims4/default/7e051d4/2147483647/strip/true/crop/995x560+3+0/resize/1000x563!/format/webp/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.amazonaws.com%2Fbrightspot%2Fwp-content%2Fuploads%2F2018%2F04%2Fchocolate-amargo.jpg",
          },
  
          {
            name: "Mantequilla de maní sin azúcares añadidos",
            description:
              "Es una buena fuente de grasas saludables, proteínas y fibra. La mantequilla de maní sin azúcar también contiene nutrientes clave como la vitamina E, el magnesio y el potasio. Estos componentes contribuyen a la salud cardiovascular, la función muscular y el mantenimiento de un sistema inmunológico fuerte.",
            recomendacion:
              "Su consumo recomendado es de 1 vez al día , tomando en cuenta que una porción es de 2 cucharadita al dia en dietas normocalóricas altas en fibra y 1 cucharadita en dietas ligeramente hipocalóricas",
            imgsrc:
              "https://dulcesdiabeticos.com/wp-content/uploads/2017/10/Mantequilla-de-cacahuete-light-sin-azucar_opt.jpg",
          },
  
          {
            name: "Queso crema bajo en grasa",
            description:
              "Contiene menos grasa y calorías, lo que lo convierte en una alternativa adecuada para aquellos que desean controlar su ingesta de grasas saturadas. Aunque tiene un menor contenido de grasa, sigue siendo una fuente de proteínas y calcio, esenciales para el crecimiento y la salud ósea",
            recomendacion:
              "Su consumo recomendado es de 1 a 2 veces al día , tomando en cuenta que una porción es de 2 cucharadas para ambas dietas",
            imgsrc:
              "https://cuantas-calorias.org/wp-content/uploads/2015/10/calorias-de-queso-crema-300x207.jpg",
          },
          {
            name: "Aceite de aguacate",
            description:
              "Es una opción saludable para aderezar alimentos. Es rico en grasas monoinsaturadas, vitamina E y antioxidantes. El consumo de aceite de aguacate puede ayudar a reducir el colesterol LDL, proteger las células del estrés oxidativo y promover la salud del corazón.",
            recomendacion:
              "Su consumo recomendado es de 2 veces al día , tomando en cuenta que una porción es de 3 cucharaditas al dia en dietas normocalóricas altas en fibra y 2 cucharaditas en dietas ligeramente hipocalóricas",
            imgsrc:
              "https://t2.uc.ltmcdn.com/es/posts/4/7/7/para_que_sirve_el_aceite_de_aguacate_propiedades_y_beneficios_43774_600.webp",
          },
  
          {
            name: "Aceite de canola",
            description:
              "Es una fuente de ácidos grasos esenciales omega-3 y omega-6, que son importantes para la función cerebral, el sistema inmunológico y la salud de la piel. Además, el aceite de canola tiene un alto punto de humo, lo que lo hace ideal para cocinar a altas temperaturas sin que se degrade fácilmente",
            recomendacion:
              "Su consumo recomendado es de 2 veces al día , tomando en cuenta que una porción es de 3 cucharaditas al dia en dietas normocalóricas altas en fibra y 2 cucharaditas en dietas ligeramente hipocalóricas",
            imgsrc:
              "https://telesearch.org/wp-content/uploads/2019/06/refined-rapeseed-canola-oil-500x500.jpg",
          },
  
          {
            name: "Aceite de soja",
            description:
              'Es una excelente fuente de grasas insaturadas, como ácidos grasos omega-3 y omega-6, que son esenciales para el funcionamiento óptimo del cuerpo. Estas grasas saludables pueden ayudar a reducir los niveles de colesterol LDL (colesterol "malo") y promover el aumento del colesterol HDL (colesterol "bueno"), mejorando así la salud cardiovascular',
            recomendacion:
              "Su consumo recomendado es de 1 vez al día , tomando en cuenta que una porción es de 2 cucharaditas al dia en dietas normocalóricas altas en fibra y 1 cucharadita en dietas ligeramente hipocalóricas",
            imgsrc:
              "https://www.gob.mx/cms/uploads/article/main_image/15133/aceite-de-soya.jpg",
          },
        ],
        title: "Grasas",
      },
    ],
  };
  
  const data = [
    {
      idReto: "Dieta hipocalórica",
      dias: [
        {
          platos: [
            {
              img: "https://elcomercio.pe/resizer/xspM9ESVzfq7QXwvYoriPznYoOU=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/5QEJ7VGG4BB4RM3UHE7FGEYGNU.png",
              name: "Porción de fruta",
              ingredientesPlatos: [
                {
                  nombrePlato: "Sandía picada",
                  preparacion: "1 taza de sandía picada",
                  alimentos: ["Sandía"],
                },
                {
                  nombrePlato: "Burrito saludable de pollo",
                  preparacion:
                    "Envolver en 1 tortilla de trigo 1/2 taza de lechuga , 1 tomate riñón picado,1/2 pechuga de pollo picado y 1/4 de aguacate picado",
                  alimentos: ["Pollo", "Lechuga", "Aguacate", "Tomate riñón"],
                },
              ],
            },
            {
              img: "https://www.univision.com/proxy/api/cached/picture?href=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Fs%2Fyogur-griego-topping-14.jpg&width=0&height=0&ratio_width=1240&ratio_height=698&format=webp",
              name: "Postre de frutilla y yogurt",
              ingredientesPlatos: [
                {
                  nombrePlato: "Postre de frutilla y yogurt",
                  preparacion:
                    "En un recipiente colocar una capa de yogurt griego de 100 ml, después 5 frutillas picadas con 5 nueces troceadas, otra capa de 100 ml de yorgurt y se decora con 5 frutillas picadas con 5 nueces toceadas.",
                  alimentos: ["Frutilla", "Yogurt griego", "Nueces"],
                },
              ],
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrx8tfKB0CSLjGK29ZF5dP-35KaOFRjDr_5w&usqp=CAU",
              name: "Plato saludable de corvina",
              ingredientesPlatos: [
                {
                  nombrePlato: "Plato saludable de corvina",
                  preparacion:
                    "1 filete de corvina en cuadritos con 1/2 taza de arroz, 1/2 taza de brócoli y 1 taza de ensalada con 1 cucharadita de aceite de oliva, de zanahoria amarilla picada con lechuga, pepinillo, rábano y col morada",
                  alimentos: [
                    "Corvina",
                    "Arroz",
                    "Brócoli",
                    "Zanahoria amarilla",
                    "Lechuga",
                    "Pepinillo",
                    "Rábano",
                    "Col Morada",
                    "Aceite de Oliva",
                  ],
                },
              ],
            },
            {
              img: "https://storage.googleapis.com/avena-recipes/agtzfmF2ZW5hLWJvdHIZCxIMSW50ZXJjb21Vc2VyGICAkKyViMwKDA/23-09-2022/tQqMeoAQ9OfBHrL0eom71663954310499.jpeg",
              name: "Tostadas de arroz y alfalfa",
              ingredientesPlatos: [
                {
                  nombrePlato: "Tostadas de arroz y alfalfa",
                  preparacion:
                    "2 tortillas de arroz crocante untadas con 1/4 de aguacate y 2 tomates cherry en cada una y 1/4 de taza de brotes de alfalfa en cada tortilla",
                  alimentos: [
                    "Tortillas de arroz crocante",
                    "Aguacate",
                    "Brotes de alfalfa",
                    "Tomate Cherry",
                  ],
                },
              ],
            },
            {
              img: "https://us.123rf.com/450wm/foodandmore/foodandmore1403/foodandmore140300140/26701213-saludable-tostado-pollo-s%C3%A1ndwich-de-pechuga-de-carne-rallado-en-ingredientes-de-la-ensalada-fresca.jpg",
              name: "Sanduche de pollo",
              ingredientesPlatos: [
                {
                  nombrePlato: "Sanduche de pollo",
                  preparacion:
                    "2 rebanadas de pan blanco con 1/4 de aguacate picado, 1 pechuga de pollo troceada junto a 1/2 taza de lechuga, 5 rebanadas de tomate riñon y 4 rebanadas de zucchini picado ",
                  alimentos: [
                    "Pan blanco de rodaja bajo en grasa",
                    "Aguacate",
                    "Pollo",
                    "Lechuga",
                    "Tomate riñón",
                    "Zucchini",
                  ],
                },
              ],
            },
          ],
          statusDay: 0,
        },
        {
          platos: [
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgGdj1qfClPaPvGEGfBmA5MiN4jRQlTNqbJuvPwpNgQLfaMeLe87qMBtbYMCdVguIG3Q&usqp=CAU",
              name: "Desayuno Hiperprotéico",
              ingredientesPlatos: [
                {
                  nombrePlato: "Porción de fruta",
                  preparacion: "10 uvas",
                  alimentos: ["Uvas"],
                },
                {
                  nombrePlato: "Desayuno Hiperprotéico ",
                  preparacion:
                    "3 tajas de queso fresco con 1 huevo duro , acompañado de 1 tostada rebanda en trozos largos",
                  alimentos: [
                    "Huevo",
                    "Queso fresco",
                    "Pan blanco de rodaja bajo en grasa",
                  ],
                },
                {
                  nombrePlato: "Grasa saludable ",
                  preparacion: "10 unidades de almendras",
                  alimentos: ["Almendras"],
                },
              ],
            },
            {
              img: "https://cdn.shopify.com/s/files/1/1064/4278/files/frutos-rojos-con-yogurt_grande.jpg?v=1477358422",
              name: "Frutos rojos y yogurt griego",
              ingredientesPlatos: [
                {
                  nombrePlato: "Frutos rojos y yogurt griego",
                  preparacion:
                    "5 unidades de frutilla y 5 unidades de mora mezcladas con 10 unidades de almendras y una taza de 200 ml de yogurt griego",
                  alimentos: ["Frutilla", "Mora", "Yogurt griego", "Almendras"],
                },
              ],
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkWPAs0upPgtHw-x7qjcSmUIRn732CNuEZdQ&usqp=CAU",
              name: "Pollo saludable",
              ingredientesPlatos: [
                {
                  nombrePlato: "Plato saludable de pollo",
                  preparacion:
                    "1 filete de pechuga de pollo de la palma de la mano con 4 papas medianas picadas y ensalada con 1 cucharadita de aceite de oliva de 1/2 tomate picado con 1 taza de zucchini y cebollas cocidas",
                  alimentos: [
                    "Papas con cáscara",
                    "Pollo",
                    "Aceite de Oliva",
                    "Tomate riñón",
                    "Cebolla Perla grande",
                    "Zucchini",
                  ],
                },
              ],
            },
            {
              img: "https://mademsa.cl/resources/uploads/prensa/noticias/images/normal/fa39f46cc8b96c387500322bc73a5e43.png",
              name: "Tostadas de arroz y frutilla",
              ingredientesPlatos: [
                {
                  nombrePlato: "Tostadas de arroz y frutilla",
                  preparacion:
                    "2 tortillas de arroz integral crocantes untadas con 2 cucharadas de yogurt griego cada una con 5 frutillas picadas en cada tortilla junto a 5 nueces picadas en cada tortilla",
                  alimentos: [
                    "Tortillas crocantes de arroz integral",
                    "Yogurt griego",
                    "Frutillas",
                    "Nueces",
                  ],
                },
              ],
            },
            {
              img: "https://www.clara.es/medio/2018/07/03/cenas-sanas-brochetas-pavo-verduras_8d554de7_600x900.jpg",
              name: "Brochetas de corvina",
              ingredientesPlatos: [
                {
                  nombrePlato: "Brochetas de corvina",
                  preparacion:
                    "2 brochetas formadas a base de 1 filete de corvina picado en cubos , 1 pimiento rojo cortado a cuadritos, 2 rebanadas de zucchini picado en cubos. Todo acompañado de 1/4 de arroz blanco",
                  alimentos: [
                    "Corvina",
                    "Zucchini",
                    "Pimiento Rojo",
                    "Arroz Blanco",
                  ],
                },
              ],
            },
          ],
          statusDay: 0,
        },
        {
          platos: [
            {
              img: "https://elcomercio.pe/resizer/lC-G-LQcGJqtaeQdr5EBHh2ypuo=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/XZDIKLUGAJCKTIATHVQCYLEGPM.png",
              name: "Desayuno saludable",
              ingredientesPlatos: [
                {
                  nombrePlato: "Porción de fruta",
                  preparacion: "1/2 unidad de plátano de seda",
                  alimentos: ["Plátano de Seda"],
                },
                {
                  nombrePlato: "Tortillas de arroz integral con huevo",
                  preparacion:
                    "2 tortillas integrales con 1/4 de aguacate , 1 huevo duro y un puñado de brotes de alfalfa, en cada una",
                  alimentos: [
                    "Tortillas crocantes de arroz integral",
                    "Aguacate",
                    "Huevo",
                    "Brotes de alfalfa",
                  ],
                },
              ],
            },
            {
              img: "https://cdn.shopify.com/s/files/1/1064/4278/files/pudin-de-chia-y-mango_grande.jpg?v=1477358997",
              name: "Delicia de Mango",
              ingredientesPlatos: [
                {
                  nombrePlato: "Delicia de Mango",
                  preparacion:
                    "1/2 unidad de mango grande picado mezclado con 2 cucharadas de chía en una taza de 200 ml de leche semidescremada , para dejarlo reposar toda la noche en el refrigerador antes de servir",
                  alimentos: [
                    "Mango",
                    "Semillas de Chía",
                    "Leche de vaca semidescremada",
                  ],
                },
              ],
            },
            {
              img: "https://www.centrojuliafarre.es/wp-content/uploads/2018/05/tupper-metodo-del-plato.jpg",
              name: "Bowl de Salmón",
              ingredientesPlatos: [
                {
                  nombrePlato: "Bowl de Salmón",
                  preparacion:
                    "1/4 de arroz con ensalada de 1/2 taza de brócoli, 1 tomate riñón picado y sazonado con 1 cucharadita de aceite de oliva y 1 filete de salmon troceado",
                  alimentos: [
                    "Salmón",
                    "Arroz Blanco",
                    "Brócoli",
                    "Tomate riñón",
                    "Aceite de Oliva",
                  ],
                },
              ],
            },
            {
              img: "https://hips.hearstapps.com/hmg-prod/images/brocheta-tomato-mozarella-1561984086.jpg?resize=980:*",
              name: "Brocheta saludable",
              ingredientesPlatos: [
                {
                  nombrePlato: "Brocheta saludable",
                  preparacion:
                    "3 brochetas con 2 tomate cherri , 2 cubitos de queso fresco y 4 hojitas de espinaca , cada una",
                  alimentos: ["Tomate Cherry", "Queso fresco", "Espinaca"],
                },
              ],
            },
            {
              img: "https://cdn7.kiwilimon.com/ss_secreto/3360/320x320/p_21151.jpg.webp",
              name: "Taco Saludable de Pollo",
              ingredientesPlatos: [
                {
                  nombrePlato: "Taco Saludable de Pollo",
                  preparacion:
                    "1 tortilla de harina integral con 1/2 taza de brócoli cocinado con 1 cucharadita de aceite de oliva , 5 rebanadas de pepinillo y 1/2 filete de pollo troceado.",
                  alimentos: [
                    "Tortillas de trigo integrales",
                    "Pollo",
                    "Brócoli",
                    "Pepinillo",
                    "Aceite de Oliva",
                  ],
                },
              ],
            },
          ],
          statusDay: 0,
        },
        {
          platos: [
            {
              img: "https://static.americadigital.com/wp-content/uploads/2020/07/america_digital_desayunos_con_huevo_recetas_2020-4-819x1024.jpg",
              name: "Desayuno saludable",
              ingredientesPlatos: [
                {
                  nombrePlato: "porción de fruta",
                  preparacion: "1/2 taza de mora",
                  alimentos: ["Mora"],
                },
                {
                  nombrePlato: "Huevo revuelto y tostada",
                  preparacion:
                    "2 huevos revueltos con 1/2 taza de espinaca , acompañado de 1 tostada con 1/4 de aguacate troceado por encima",
                  alimentos: [
                    "Pan blanco de rodaja bajo en grasa",
                    "Huevo",
                    "Espinaca",
                    "Aguacate",
                  ],
                },
              ],
            },
            {
              img: "https://firebasestorage.googleapis.com/v0/b/nutridoc-4ee6b.appspot.com/o/plato_saludable_2.jpeg?alt=media&token=cd98550a-2c41-47da-818f-faaa94acb641",
              name: "Bananas congeladas",
              ingredientesPlatos: [
                {
                  nombrePlato: "Bananas congeladas",
                  preparacion:
                    "1/ unidad de plátano de seda congelado con un palillo en el centro del mismo y bañado con yogurt griego y trozos de 10 almendras picadas",
                  alimentos: ["Plátano de Seda", "Yogurt griego", "Almendras"],
                },
              ],
            },
            {
              img: "https://firebasestorage.googleapis.com/v0/b/nutridoc-4ee6b.appspot.com/o/plato_saludable_carne_de_red.jpeg?alt=media&token=a08c45d5-8261-4644-9445-7d5bffb27181",
              name: "Plato saludable de carne de res",
              ingredientesPlatos: [
                {
                  nombrePlato: "Plato saludable de carne de res",
                  preparacion:
                    "1 filete del porte de la palma de la mano de carne de res, ensalda con 1 cucharadita de aceite de oliva de 1 taza de lechuga y tomate riñón , 2 tortillas de papa caseras",
                  alimentos: [
                    "Carne de Res",
                    "Lechuga",
                    "Tomate riñón",
                    "Aceite de Oliva",
                    "Arroz Blanco",
                  ],
                },
              ],
            },
            {
              img: "https://i0.wp.com/ingridgimenez.com/wp-content/uploads/2022/07/IMG_8848-1.jpg?resize=600%2C450&ssl=1",
              name: "Tostadas de arroz y arrandanos",
              ingredientesPlatos: [
                {
                  nombrePlato: "Tostadas de arroz y arrandanos",
                  preparacion:
                    "2 tortillas de arroz crujiente con 5 arandanos y 1 cucharadita de mantequilla de maní sin azúcares añadidos, untada en cada una ",
                  alimentos: [
                    "Tortillas crocantes de arroz integral",
                    "Arándanos",
                    " Mantequilla de maní sin azúcares añadidos",
                  ],
                },
              ],
            },
            {
              img: "https://firebasestorage.googleapis.com/v0/b/nutridoc-4ee6b.appspot.com/o/plato_saludable_3.jpeg?alt=media&token=4e13dc11-c13b-4ba2-b3b4-2aef43b5b3d4",
              name: "Pechuga con pimientos salteados",
              ingredientesPlatos: [
                {
                  nombrePlato: "Pechuga con pimientos salteados",
                  preparacion:
                    "2 pedazos de pechuga de pollo, 1 taza de arroz blanco, 2 rebanadas de tomate riñón , 1/2 taza de brócoli picado junto a 1/2 pimiento rojo salteado on 1 cucharadita de aceite de oliva",
                  alimentos: [
                    "Pollo",
                    "Arroz Blanco",
                    "Tomate riñón",
                    "Brócoli",
                    "Pimiento Rojo",
                    "Aceite de Oliva",
                  ],
                },
              ],
            },
          ],
          statusDay: 0,
        },
        {
          platos: [
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmrlTtMwEQM0EC3T82Nk8FvDQWtx6sh5h0ug&usqp=CAU",
              name: "Desayuno saludable",
              ingredientesPlatos: [
                {
                  nombrePlato: "Porción de fruta",
                  preparacion: "1 unidad de naranja",
                  alimentos: ["Naranja"],
                },
                {
                  nombrePlato: "Tostadas de huevo",
                  preparacion:
                    "1 tostada untada con 1/4 de aguacate y 1 huevo pochado por encima, acompañado de ensalada de 10 tomates cherry picados",
                  alimentos: [
                    "Aguacate",
                    "Pan blanco de rodaja bajo en grasa",
                    "Tomate Cherry",
                    "Huevo",
                  ],
                },
              ],
            },
            {
              img: "https://firebasestorage.googleapis.com/v0/b/nutridoc-4ee6b.appspot.com/o/plato_saludable_4.jpeg?alt=media&token=be383c0e-3849-46b1-abc1-18f9b11e60f6",
              name: "Bowl de kiwi y platano",
              ingredientesPlatos: [
                {
                  nombrePlato: "Bowl de kiwi y platano",
                  preparacion:
                    "1/2 unidad de kiwi picado con 1/4 de unidad de platano de seda con 1 taza de 200 ml de yogurt griego , con 2 cucharaditas de chia",
                  alimentos: [
                    "Kiwi",
                    "Plátano de Seda",
                    "Yogurt griego",
                    "Semillas de Chía",
                  ],
                },
              ],
            },
            {
              img: "https://i.pinimg.com/236x/a7/6e/ff/a76eff7e1f67526390e4410a1027d29c.jpg",
              name: "Trucha a la plancha",
              ingredientesPlatos: [
                {
                  nombrePlato: "Trucha a la plancha",
                  preparacion:
                    "1 filete y medio de trucha con ensalada de 1/4 de aguacate, 1 tomate riñón y media taza de zucchini cocido y 2 papas medianas ",
                  alimentos: [
                    "Trucha",
                    "Aguacate",
                    "Zucchini",
                    "Tomate riñón",
                    "Papas con cáscara",
                  ],
                },
              ],
            },
            {
              img: "https://www.fithappysisters.com/Portals/FitHappySister/Mercadillo/files/bimbo99.jpg",
              name: "Tostada de dulce",
              ingredientesPlatos: [
                {
                  nombrePlato: "Tostada de dulce",
                  preparacion:
                    "1 rebanada de pan blanco con 4 cucharadas de yogurt griego untado junto a 10 uvas cortadas por la mitad y acompañado de 10 almendras peladas y cortadas",
                  alimentos: [
                    "Pan blanco de rodaja bajo en grasa",
                    "Yogurt griego",
                    "Uvas",
                    "Almendras",
                  ],
                },
              ],
            },
            {
              img: "https://www.clara.es/medio/2022/06/26/sandwich-de-pollo-asado-con-ensalada_96b4a782_800x1066.jpg",
              name: "Empaquetados de pollo",
              ingredientesPlatos: [
                {
                  nombrePlato: "Empaquetados de pollo",
                  preparacion:
                    "2 rebanadas de pan blanco cortadas a la mitad y sin bordes, rellanas cada mitad con 4 tomates cherry, media pechuga de pollo y 1/4 de taza de lechuga",
                  alimentos: [
                    "Pan blanco de rodaja bajo en grasa",
                    "Tomate Cherry",
                    "Lechuga",
                    "Pollo",
                  ],
                },
              ],
            },
          ],
          statusDay: 0,
        },
        {
          platos: [
            {
              img: "https://static.americadigital.com/wp-content/uploads/2020/07/america_digital_desayunos_con_huevo_recetas_2020-2-819x1024.jpg",
              name: "Desayuno nutritivo",
              ingredientesPlatos: [
                {
                  nombrePlato: "Porción de fruta",
                  preparacion: "1 unidad de pera",
                  alimentos: ["Pera"],
                },
                {
                  nombrePlato: "Huevos revueltos",
                  preparacion:
                    "2 huevos revueltos con 1 tomate riñón picado y 1/2 taza de espinaca acompañado de 4 galletas de sal bajas en grasa y 1/4 de aguacate",
                  alimentos: [
                    "Aguacate",
                    "Espinaca",
                    "Huevo",
                    "Galletas de sal bajas en grasa",
                    "Tomate riñón",
                  ],
                },
              ],
            },
            {
              img: "https://adelgazarencasa.co/wp-content/uploads/2018/03/IMG_9630.jpg",
              name: "Uvas proteicas",
              ingredientesPlatos: [
                {
                  nombrePlato: "Uvas proteicas",
                  preparacion:
                    "10 unidades de uvas , cada una de ellas remojadas en yogurt griego, para despues congelarlas. Como acompañante 10 unidades de pistachos",
                  alimentos: ["Uva", "Yogurt griego", "Pistacho"],
                },
              ],
            },
            {
              img: "https://firebasestorage.googleapis.com/v0/b/nutridoc-4ee6b.appspot.com/o/plato_saludable_5.jpeg?alt=media&token=7d082042-234e-43a0-8dca-bb4ef9f2d086",
              name: "Pollo asado",
              ingredientesPlatos: [
                {
                  nombrePlato: "Pollo asado",
                  preparacion:
                    "1 cuarto de pollo, 3 papas pequeñas con cáscara y 1 taza de ensalada ,con 1 cuchradita de aceite de oliva, de lechuga y tomate riñón",
                  alimentos: [
                    "Pollo",
                    "Tomate riñón",
                    "Lechuga",
                    "Papas con cáscara",
                    "Aceite de Oliva",
                  ],
                },
              ],
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDE_aUoo-qHmapEfu-dIaVztI-L66oehrI1g&usqp=CAU",
              name: "Manzanas y Maní ",
              ingredientesPlatos: [
                {
                  nombrePlato: "Manzanas y Maní ",
                  preparacion:
                    "1 manzana picada en trozon , acompañada de 1 cucharada de mantequilla de maní sin azúcares añadidos",
                  alimentos: [
                    "Mantequilla de maní sin azúcares añadidos",
                    "Manzana",
                  ],
                },
              ],
            },
            {
              img: "https://hips.hearstapps.com/hmg-prod/images/cenas-sanas-salmo-n-con-patatas-y-espa-rragos-1610546990.jpg?crop=0.9982238010657194xw:1xh;center,top&resize=980:*",
              name: "Papas y salmón asado",
              ingredientesPlatos: [
                {
                  nombrePlato: "Papas y salmón asado",
                  preparacion:
                    "2 papas con cáscara picadas en rodajas, junto a 10 espárragos salteados en 1 cucharadita de aceite de oliva y 1 filete de salmón asado",
                  alimentos: ["Salmón", "Espárragos", "Papas con cáscara"],
                },
              ],
            },
          ],
          statusDay: 0,
        },
        {
          platos: [
            {
              img: "https://elcomercio.pe/resizer/rFV88u3TS2AlL2q6OKZGztElgpU=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/K6IBW2MA5JGYHINQXM6YRCLM6A.png",
              name: "Desayuno dulce",
              ingredientesPlatos: [
                {
                  nombrePlato: "Desayuno dulce",
                  preparacion: "10 unidades de moras y 10 unidades de frutillas",
                  alimentos: ["Mora", "Frutilla"],
                },
                {
                  nombrePlato: "Tortillas de dulce saludables",
                  preparacion:
                    "tortillitas pequeñas hechas a base de 1 huevos, 2 cucharaditas de mantequilla de mani, 2 cucharadas de harina de trigo y 1/2 taza de leche de vaca semidescremada",
                  alimentos: [
                    "Harina de Trigo",
                    "Mantequilla de maní sin azúcares añadidos",
                    "Huevo",
                    "Leche de vaca semidescremada",
                  ],
                },
              ],
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHfICoJpknl4ere3kycYN4RxsqxsYWCvecJg&usqp=CAU",
              name: "Barritas de yogurt",
              ingredientesPlatos: [
                {
                  nombrePlato: "Barritas de yogurt",
                  preparacion:
                    "Esparcir una taza de yogurt griego en una charola junto a 10 unidades de mortiño con 1 cucharadita de linaza por encima, para proceder a refrigerar",
                  alimentos: ["Mortiño", "Yogurt griego", "Semillas de Linaza"],
                },
              ],
            },
            {
              img: "https://firebasestorage.googleapis.com/v0/b/nutridoc-4ee6b.appspot.com/o/plato_saludable_6.jpeg?alt=media&token=43a47a4f-cd6e-4a00-9c0a-ad46712bb683",
              name: "Filetes de dorado",
              ingredientesPlatos: [
                {
                  nombrePlato: "Filetes de dorado",
                  preparacion:
                    "2 filetes pequeños de dorado con 1 taza de arroz y 1 taza de lechuga picada con 1 cucharadita de aceite de oliva",
                  alimentos: [
                    "Lechuga",
                    "Arroz Blanco",
                    "Pescado Dorado",
                    "Aceite de Oliva",
                  ],
                },
              ],
            },
            {
              img: "https://firebasestorage.googleapis.com/v0/b/nutridoc-4ee6b.appspot.com/o/plato_saludable_7.jpeg?alt=media&token=cc1fde9f-0ecc-4227-9875-149a94e21422",
              name: "Tortillas de arroz y platano de seda",
              ingredientesPlatos: [
                {
                  nombrePlato: "Tortillas de arroz y platano de seda",
                  preparacion:
                    "2 tortillas de arroz crujiente con 1/2 plátano de seda picado acompañado de 2 tortillas de arroz untadas con 1 cucharadita de de maní sin azúcares añadidos",
                  alimentos: [
                    "Tortillas crocantes de arroz integral",
                    "Mantequilla de maní sin azúcares añadidos",
                    "Plátano de Seda",
                  ],
                },
              ],
            },
            {
              img: "https://hips.hearstapps.com/hmg-prod/images/cenas-sanas-fajitas-con-heura-1610548337.jpg?crop=1.00xw:0.669xh;0,0.248xh&resize=980:*",
              name: "Tacos de queso crema bajo en grasa con lechuga",
              ingredientesPlatos: [
                {
                  nombrePlato: "Tacos de queso crema bajo en grasa con lechuga",
                  preparacion:
                    "1 tortilla de trigo con 1/2 filete de pechuga de pollo, 1 taza de lechuga y 2 cucharaditas de queso crema bajo en grasa",
                  alimentos: [
                    "Queso crema bajo en grasa",
                    "Tortillas de trigo integrales",
                    "Pollo",
                    "Lechuga",
                  ],
                },
              ],
            },
          ],
          statusDay: 0,
        },
      ],
      retoStatus: 0,
    },
    {
      idReto: "Dieta alta en fibra",
      dias: [
        {
          platos: [
            {
              img: "https://cdn7.kiwilimon.com/ss_secreto/3797/960x640/3797.jpg.jpg",
              name: "Desayuno saludable",
              ingredientesPlatos: [
                {
                  nombrePlato: "Fruta",
                  preparacion: "1 taza de papaya ",
                  alimentos: ["Papaya"],
                },
                {
                  nombrePlato: "Huevo revuelto",
                  preparacion:
                    "1 huevo entero y 2 claras de huevo mezclados en 1 sarten con 1/2 taza de vainitas picadas previamente hervidas , acompañado de 1/2 taza de fréjol rojo con 1/3 de queso fresco troceado por encima ",
                  alimentos: [
                    "Clara de Huevo",
                    "Huevo",
                    "Fréjol Rojo",
                    "Queso fresco",
                    "Vainita",
                  ],
                },
              ],
            },
            {
              img: "https://biotrendies.com/wp-content/uploads/2016/11/brochetas-frutas.jpg",
              name: "Pinchos de fruta",
              ingredientesPlatos: [
                {
                  nombrePlato: "Pinchos de fruta",
                  preparacion:
                    "3 pinchos de fruta, donde cada uno contiene: 1 fresa, 1 trozo de pera, 1 trozo de kiwi, 1 trozo de mango, 1 trozo de platano de seda y 1 trozo de manzana. Acompañado de media taza de yogurt griego",
                  alimentos: [
                    "Frutilla",
                    "Mango",
                    "Kiwi",
                    "Pera",
                    "Manzana",
                    "Plátano de Seda",
                    "Yogurt griego",
                  ],
                },
              ],
            },
            {
              img: "https://firebasestorage.googleapis.com/v0/b/nutridoc-4ee6b.appspot.com/o/plato_saludable_8.jpg?alt=media&token=224e1d75-a6a1-4e45-bf54-ef3b55d6c654",
              name: "Ensalada con pollo",
              ingredientesPlatos: [
                {
                  nombrePlato: "Ensalada con pollo",
                  preparacion:
                    "1 taza de ensalda con lechuga y 1/2 tomate riñón picado con 1 pierna de pollo y 1 taza de lentejas cocidas",
                  alimentos: ["Lechuga", "Tomate riñón", "Pollo", "Lenteja"],
                },
              ],
            },
            {
              img: "https://www.cuerpomente.com/medio/2021/01/22/bocaditos-de-cacao-y-mantequilla-de-cacahuetes_b4d2c158_900x899.jpg",
              name: "Bocadito de chocolate",
              ingredientesPlatos: [
                {
                  nombrePlato: "Bocadito de chocolate",
                  preparacion:
                    "congelar 2 cuadritos de chocolate amargo derretido con yogurt griego, para untar con 2 cucharaditas de mantequilla de maní sin azúcares añadidos, volver a congelar, y sellar con otros 2 cuadritos de chocolate amargo derretido con yogurt griego ",
                  alimentos: [
                    "Chocolate negro semiamargo sin azúcar",
                    "Mantequilla de maní sin azúcares añadidos",
                    "Yogurt griego",
                  ],
                },
              ],
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSZoOkvEz0l9kk7NIBPAbCI8TmrBikvQSadQ&usqp=CAU",
              name: "Burrito",
              ingredientesPlatos: [
                {
                  nombrePlato: "Burrito",
                  preparacion:
                    "1 tortilla de trigo rellena de 1 pechuga de pollo troceada con 1/2 pimiento verde y 1/2 pimiento rojo troceados ",
                  alimentos: [
                    "Tortillas de trigo integrales",
                    "Pollo",
                    "Pimiento Rojo",
                    "Pimiento Verde",
                  ],
                },
              ],
            },
          ],
          statusDay: 0,
        },
        {
          platos: [
            {
              img: "https://firebasestorage.googleapis.com/v0/b/nutridoc-4ee6b.appspot.com/o/plato_saludable_9.jpeg?alt=media&token=994bebdf-f0d5-47d4-94bf-479eafa69e6f",
              name: "Desayuno saludable",
              ingredientesPlatos: [
                {
                  nombrePlato: "Porcion de kiwi",
                  preparacion: "1 unidad de kiwi picado en rodajas",
                  alimentos: ["Kiwi"],
                },
                {
                  nombrePlato: "Tortillas de linaza",
                  preparacion:
                    "2 tortillas de linaza hechas con 4 cucharadas de harina de linanaza , mezcladas con 2 huevos y 1/2 taza de yogurt descremado ",
                  alimentos: [
                    "Huevo",
                    "Semillas de Linaza",
                    "Yogurt Natural semidescremado",
                  ],
                },
              ],
            },
            {
              img: "https://www.cuerpomente.com/medio/2021/10/18/dados-de-queso_c3415bc3_900x900.jpg",
              name: "Brochetas de sal",
              ingredientesPlatos: [
                {
                  nombrePlato: "Brochetas de sal",
                  preparacion:
                    "2 pinchos donde cada uno contiene:  2 bloques de queso 2x2 y 2 trozos de pan integral del mismo tamaño que el queso",
                  alimentos: [
                    "Pan integral de rodaja bajo en grasa",
                    "Queso fresco",
                  ],
                },
              ],
            },
            {
              img: "",
              name: "",
              ingredientesPlatos: [
                {
                  nombrePlato: "",
                  preparacion: "",
                  alimentos: [""],
                },
              ],
            },
            {
              img: "https://www.cuerpomente.com/medio/2021/01/22/apio-relleno-de-queso-vegetal_ce35d013_1500x1500.jpg",
              name: "Barquillos de apio",
              ingredientesPlatos: [
                {
                  nombrePlato: "Barquillos de apio",
                  preparacion:
                    "3 barquillos de apio rellenos con 3 cucharadas de yogurt griego y 5 nueces troceada",
                  alimentos: ["Apio", "Yogurt griego", "Nueces"],
                },
              ],
            },
            {
              img: "https://gastronomiaycia.republica.com/wp-content/uploads/2013/07/recetas_aguacate_pescado_re-680x448.jpg",
              name: "Aguacate y pescado",
              ingredientesPlatos: [
                {
                  nombrePlato: "Aguacate y pescado",
                  preparacion:
                    "1/2 aguacate ,1/2 taza de garbanzo, 1 filete de salmón 1 taza de lechuga con 1 tomate picado ",
                  alimentos: [
                    "Garbanzo",
                    "Lechuga",
                    "Tomate riñón",
                    "Aguacate",
                    "Salmón",
                  ],
                },
              ],
            },
          ],
          statusDay: 0,
        },
        {
          platos: [
            {
              img: "https://i.blogs.es/68223e/desayuno2/1366_2000.jpg",
              name: "Desayuno saludable",
              ingredientesPlatos: [
                {
                  nombrePlato: "ensalada de frutas",
                  preparacion: "1 taza de sandia junto a 1 taza de piña ",
                  alimentos: ["Sandía", "Piña"],
                },
                {
                  nombrePlato: "Sanduche integral",
                  preparacion:
                    "2 rodajas de pan integral con, 2 huevos picados, 2 rodajas de tomate riñón y 1/4 de aguacate picado",
                  alimentos: [
                    "Huevo",
                    "Pan integral de rodaja bajo en grasa",
                    "Tomate riñón",
                    "Aguacate",
                  ],
                },
              ],
            },
            {
              img: "https://www.cuerpomente.com/medio/2021/10/18/tortitas-de-arroz-con-cremas-de-frutos-secos_72ebedb3_900x900.jpg",
              name: "Sanduche de arroz",
              ingredientesPlatos: [
                {
                  nombrePlato: "Sanduche de arroz",
                  preparacion:
                    "Untar en una tortilla de arroz integral 2 cucharaditas de mantequilla de maní sin azúcares añadidos y cerrar con otra tortilla integral de arroz",
                  alimentos: [
                    "Mantequilla de maní sin azúcares añadidos",
                    "Tortillas crocantes de arroz integral",
                  ],
                },
              ],
            },
            {
              img: "https://pbs.twimg.com/media/EJ_uPgKX0AAnO8E?format=jpg&name=360x360",
              name: "Filete de carne",
              ingredientesPlatos: [
                {
                  nombrePlato: "Filete de carne",
                  preparacion:
                    "1 filete de carne de lomo de res acompañado de 2 papas picadas en rodajas mas ensalada de 1 taza de lechuga, 1/2 taza de brócoli con 1/2 rábano picado y 2 rodajas de tomate riñón ",
                  alimentos: [
                    "Carne de Res",
                    "Tomate riñón",
                    "Lechuga",
                    "Papas con cáscara",
                    "Rábano",
                    "Brócoli",
                  ],
                },
              ],
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQ7L_tinYXJAM-YZKtqQXdXN7yGx1H765kg&usqp=CAU",
              name: "Snack de manzana",
              ingredientesPlatos: [
                {
                  nombrePlato: "Snack de manzana",
                  preparacion:
                    "1 manzana picada en rodajas con 1/2 cucharadita de lizana encima de cada rodaja",
                  alimentos: ["Manzana", "Semillas de Linaza"],
                },
              ],
            },
            {
              img: "https://inuba.com/wp-content/uploads/2022/01/Tostadas-mozzarella-tomate-albahaca-y-pesto-768x472.webp",
              name: "Tostadas italianas",
              ingredientesPlatos: [
                {
                  nombrePlato: "Tostadas italianas",
                  preparacion:
                    "Tostada de pan integral con 3 rodajas de queso fresco encima de 3 rodajas de tomate riñón y 1 cucharadita de aceite de oliva",
                  alimentos: [
                    "Pan integral de rodaja bajo en grasa",
                    "Queso fresco",
                    "Tomate riñón",
                    "Aceite de Oliva",
                  ],
                },
              ],
            },
          ],
          statusDay: 0,
        },
        {
          platos: [
            {
              img: "https://www.hechicerafit.com/static/r/94/Uousg_thumb.jpg",
              name: "Desayuno saludable",
              ingredientesPlatos: [
                {
                  nombrePlato: "Ensalada de frutas",
                  preparacion:
                    "1 unidad de pitahaya de pulpa roja con 1 unidad de manzana picada",
                  alimentos: ["Pitahaya con pulpa Roja", "Manzana"],
                },
                {
                  nombrePlato: "Tortillas de Garbanzo",
                  preparacion:
                    "3 tortillas pequeñas hechas a base de : 1 taza de garbanzos cocidos triturados con 1 cucharadita de aceite de oliva , 2 huevos enteros y 1 clara",
                  alimentos: [
                    "Garbanzo",
                    "Huevo",
                    "Clara de Huevo",
                    "Aceite de Oliva",
                  ],
                },
              ],
            },
            {
              img: "https://firebasestorage.googleapis.com/v0/b/nutridoc-4ee6b.appspot.com/o/plato_saludable_10.jpeg?alt=media&token=346f56f5-4fc7-498c-9356-80e1ac7b59f1",
              name: "Sanduche de frutilla",
              ingredientesPlatos: [
                {
                  nombrePlato: "Sanduche de frutilla",
                  preparacion:
                    "Partir 2 panes integrales por la mitad y formar 2 sanduches,rellenandolos de 1 cucharadita de mantequilla de maní sin azúcares añadidos y 3 frutillas cortadas ",
                  alimentos: [
                    "Pan integral de rodaja bajo en grasa",
                    "Frutilla",
                    "Mantequilla de maní sin azúcares añadidos",
                  ],
                },
              ],
            },
            {
              img: "https://firebasestorage.googleapis.com/v0/b/nutridoc-4ee6b.appspot.com/o/plato_saludable_11.jpg?alt=media&token=4d92e129-7e07-4945-8a63-c145c186400d",
              name: "Arroz moro con pollo",
              ingredientesPlatos: [
                {
                  nombrePlato: "Arroz moro con pollo",
                  preparacion:
                    "1 pechuga de pollo a la plancha junto a 1 taza de arroz morro (1/2 taza de arroz blanco y 1/2 taza de lenteja), junto a ensalda a base de 2 hojas de lechuga, 2 rebanadas de tomate riñón, 1 taza de brócoli , zanahoria, zucchini y coliflor cocidos ",
                  alimentos: [
                    "Pollo",
                    "Tomate riñón",
                    "Lenteja",
                    "Arroz Blanco",
                    "Brócoli",
                    "Coliflor",
                    "Zucchini",
                    "Zanahoria amarilla",
                  ],
                },
              ],
            },
            {
              img: "https://firebasestorage.googleapis.com/v0/b/nutridoc-4ee6b.appspot.com/o/plato_saludable_12.jpeg?alt=media&token=ada803da-441a-4c39-9c09-f1fc5818c002",
              name: "Pinchos integrales",
              ingredientesPlatos: [
                {
                  nombrePlato: "Pinchos integrales",
                  preparacion:
                    "2 pinchos a base de: 4 sanduches de 2 rodajas redondas de pan integral rellenos cada uno de 1 cucharadita de yogurt griego , acompañados de 1 unidad de frutilla y 2 rodajas de platano de seda",
                  alimentos: [
                    "Frutilla",
                    "Pan integral de rodaja bajo en grasa",
                    "Plátano de Seda",
                    "",
                    "Yogurt griego",
                  ],
                },
              ],
            },
            {
              img: "https://firebasestorage.googleapis.com/v0/b/nutridoc-4ee6b.appspot.com/o/plato_saludable_13.jpg?alt=media&token=adb90eca-375b-4fb8-9cff-5ed41e545194",
              name: "Platillo saludable",
              ingredientesPlatos: [
                {
                  nombrePlato: "Platillo saludable",
                  preparacion:
                    "Sanduche de 1/4 de unidad de aguacate junto a 1 taza de ensalada salteada con 1 cucharadita de aceite de oliva de 1 taza de brócoli, pimiento rojo, champiñones y 2 huevos revueltos ",
                  alimentos: [
                    "Pan blanco de rodaja bajo en grasa",
                    "Aguacate",
                    "Tomate riñón",
                    "Brócoli",
                    "Champiñones",
                    "Huevo",
                    "Pimiento Rojo",
                  ],
                },
              ],
            },
          ],
          statusDay: 0,
        },
        {
          platos: [
            {
              img: "https://firebasestorage.googleapis.com/v0/b/nutridoc-4ee6b.appspot.com/o/plato_saludable_14.jpg?alt=media&token=6b55e0f7-1a22-459d-af88-dc2fb57dea5b",
              name: "Desayuno nutritivo",
              ingredientesPlatos: [
                {
                  nombrePlato: "Porción de frutas",
                  preparacion: "2 unidades de duraznos rojos picados",
                  alimentos: ["Durazno rojo"],
                },
                {
                  nombrePlato: "Quinua y pollo",
                  preparacion:
                    "1 taza de quinua cocida acompañada de 1 pechuga de pollo troceada y 1 taza de ensalada de espinaca y pepinillo",
                  alimentos: ["Quinua", "Espinaca", "Pepinillo", "Pollo"],
                },
              ],
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR8ega5VGQXBEeRI4bFpB7KBJm6G1YRZYAH5AeP-cqzt-wlKjF0WZ2yBAfpClgtmSETjs&usqp=CAU",
              name: "Donas de manzana",
              ingredientesPlatos: [
                {
                  nombrePlato: "Donas de manzana",
                  preparacion:
                    "1 manzana cortada en rodajas, donde cada rodaja esta cubierta en la superficie de 1 cucharadita de mantequilla de maní sin azúcares añadidos, 3 almendras laminadas y 4 chispas de chocolate amargo",
                  alimentos: [
                    "Manzana",
                    "Chocolate negro semiamargo sin azúcar",
                    "Almendras",
                    "Mantequilla de maní sin azúcares añadidos",
                  ],
                },
              ],
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAAc_D--xW6MqldKLIqY-MJzwDIvOfojSS4kIl07AQRz5ncuLFm1y12kucHO6ZOTHNxc8&usqp=CAU",
              name: "Acompañamiento de fideo integral",
              ingredientesPlatos: [
                {
                  nombrePlato: "Acompañamiento de fideo integral",
                  preparacion:
                    "1 taza de brócoli cocido con 1 cucharadita de aceite de oliva , junto a 1/2 taza de fideo integral y 1/2 taza de lomo de cerdo a la plancha picado ",
                  alimentos: [
                    "Lomo de cerdo",
                    "Pasta integral",
                    "Brócoli",
                    "Aceite de Oliva",
                  ],
                },
              ],
            },
            {
              img: "https://blog.natruly.com/wp-content/uploads/2020/08/polos-1.jpg",
              name: "Helados de frutilla",
              ingredientesPlatos: [
                {
                  nombrePlato: "Helados de frutilla",
                  preparacion:
                    "10 unidades de frutilla picada mezclada con 1/2 unidad de platano de seda, 5 nueces troceadas y 1 taza de yogurt griego, para despues colocar en tres moldes de helado y congelar.",
                  alimentos: [
                    "Frutilla",
                    "Plátano de Seda",
                    "Yogurt griego",
                    "Nueces",
                  ],
                },
              ],
            },
            {
              img: "https://comidaschilenas.com/wp-content/uploads/2021/02/Receta-de-carne-molida-a-la-chilena.jpg",
              name: "Carne molida campestre",
              ingredientesPlatos: [
                {
                  nombrePlato: "Carne molida campestre",
                  preparacion:
                    "4 bolitas de carne molida junto a 1/2 taza de arroz y 1/2 taza de arveja amarilla mezclado y de ensalada 1 taza de lechuga junto a 1/4 de aguacat",
                  alimentos: [
                    "Carne molida de res baja en grasa",
                    "Arroz Blanco",
                    "Arveja amarilla",
                    "Lechuga",
                    "Aguacate",
                  ],
                },
              ],
            },
          ],
          statusDay: 0,
        },
        {
          platos: [
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEaskW6ltImQnc8wwgL6rvyZxf6_sFjgwBA&usqp=CAU",
              name: "Desayuno nutritivo",
              ingredientesPlatos: [
                {
                  nombrePlato: "Porción de frutas",
                  preparacion: "1 unidad de mango mediano picado",
                  alimentos: ["Mango"],
                },
                {
                  nombrePlato: "Tortillas de garbanzo rellenas",
                  preparacion:
                    "1/2 taza de garbanzos cocinados aplastados, mezclada con 1 huevo ,agua y sal para formar 1 tortilla y rellenarla con 1 mitad de aguacate aplastado, 60 gr de pollo desmechado , 2 rodajas de cebolla picadas y 2 rodajas de tomate riñon picado en cuadritos.",
                  alimentos: [
                    "Garbanzo",
                    "Pollo",
                    "Aguacate",
                    "Tomate riñón",
                    "Huevo",
                    "Cebolla Perla grande",
                  ],
                },
              ],
            },
            {
              img: "https://www.hogarmania.com/archivos/202304/galletas-platano-avena-portada-848x477x80xX.jpg",
              name: "Galletas de avena y plátano de seda",
              ingredientesPlatos: [
                {
                  nombrePlato: "Galletas de avena y plátano de seda",
                  preparacion:
                    "Mezclar 2 cucharaditas de mantequilla maní sin azúcares añadidos con 4 cucharadas de avena en hojuelas y 1/2 platano de seda aplastado. Para despues formar bolitas, aplastarlas y hornearlas por 10 a 20 minutos.",
                  alimentos: [
                    "Avena",
                    "Plátano de Seda",
                    "Mantequilla de maní sin azúcares añadidos",
                  ],
                },
              ],
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhCkj5stzXzPGx-lHt1t9oZ9ej1k6NStthx1diE_gzoUwhL3X6sl2gho4eptPOLPlkNSQ&usqp=CAU",
              name: "Carne molida llenadora",
              ingredientesPlatos: [
                {
                  nombrePlato: "Carne molida llenadora",
                  preparacion:
                    "1/2 taza de carne molida baja en grasa, junto a 2 papas hervidas y troceadas y 1 taza de ensalada de zanahoria, brócoli y coliflor junto a 1 cucharadita de aceite de oliva",
                  alimentos: [
                    "Zanahoria amarilla",
                    "Papas con cáscara",
                    "Carne molida de res baja en grasa",
                    "Brócoli",
                    "Coliflor",
                    "Aceite de Oliva",
                  ],
                },
              ],
            },
            {
              img: "https://firebasestorage.googleapis.com/v0/b/nutridoc-4ee6b.appspot.com/o/plato_saludable_15.jpeg?alt=media&token=7c580c6c-f405-4618-acdb-839e45f39186",
              name: "Porción de sandía",
              ingredientesPlatos: [
                {
                  nombrePlato: "Porción de sandía",
                  preparacion:
                    "1 porción triangular de sandia con 2 cucharadas de yogurt griego , 7 arandanos y una frutilla picada en su superficie",
                  alimentos: ["Sandía", "Frutilla", "Arándanos", "Yogurt griego"],
                },
              ],
            },
            {
              img: "https://inuba.com/wp-content/uploads/2022/01/Tostadas-sin-gluten-con-huevos-revueltos-y-champinones-1024x682.webp",
              name: "Tostadas integrales rellenas",
              ingredientesPlatos: [
                {
                  nombrePlato: "Tostadas integrales rellenas",
                  preparacion:
                    "2 tostadas de pan integral con 1 huevo revuelto y 2 champiñones rebanados salteados con 1 cucharadita de aceite de oliva y 1 pisca de perejil troceado",
                  alimentos: [
                    "Pan integral de rodaja bajo en grasa",
                    "Huevo",
                    "Champiñones",
                  ],
                },
              ],
            },
          ],
          statusDay: 0,
        },
        {
          platos: [
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR13gcO22LskoH9mIBPNKG-zpGoPM-7tlXCrx9K24nlVhQYdvFumGxOLmRFuCePz0aZbBI&usqp=CAU",
              name: "Desayuno saludable",
              ingredientesPlatos: [
                {
                  nombrePlato: "Porcion de fruta",
                  preparacion: "1/2 taza de mortiño",
                  alimentos: ["Mortiño"],
                },
                {
                  nombrePlato: "Huevos frescos y aguacate",
                  preparacion:
                    "2 huevos revueltos con 1 taja de queso fresco troceado , acompañado de 1 taja de pan integral con 1/4 de aguacate picado",
                  alimentos: [
                    "Pan integral de rodaja bajo en grasa",
                    "Huevo",
                    "Queso fresco",
                  ],
                },
              ],
            },
            {
              img: "https://firebasestorage.googleapis.com/v0/b/nutridoc-4ee6b.appspot.com/o/plato_saludable_16.jpeg?alt=media&token=6f2b2068-7f1a-4702-be63-cb1a4be6340d",
              name: "Dulzura de plátano",
              ingredientesPlatos: [
                {
                  nombrePlato: "Dulzura de plátano",
                  preparacion:
                    "Medio plátano de seda cortado en rodajas redondas , cubiertas de chocolate amargo pudo",
                  alimentos: [
                    "Plátano de Seda",
                    "Chocolate negro semiamargo sin azúcar",
                  ],
                },
              ],
            },
            {
              img: "https://firebasestorage.googleapis.com/v0/b/nutridoc-4ee6b.appspot.com/o/plato_saludable_17.jpg?alt=media&token=4fb5ddbf-522f-4ab9-be4e-ac9ca15234f4",
              name: "Bowl de arroz",
              ingredientesPlatos: [
                {
                  nombrePlato: "Bowl de arroz",
                  preparacion:
                    "1 taza de arroz blanco con 1 lata de atun en agua mezclado con 1/4 de cebolla picada y acompañado de 1 taza de lechuga y 1/2 aguacate",
                  alimentos: [
                    "Arroz Blanco",
                    "Aguacate",
                    "Atún",
                    "Cebolla Perla grande",
                    "Lechuga",
                  ],
                },
              ],
            },
            {
              img: "https://mundosjumbo.cl/wp-content/uploads/sites/3/2021/12/GettyImages-894632498-min-1.jpg",
              name: "Uvas congeladas",
              ingredientesPlatos: [
                {
                  nombrePlato: "Uvas congeladas",
                  preparacion:
                    "10 uvas congeladas, cubiertas desde la mitad hasta la base con yogurt griego y espolvoreado en la base con semillas de Chía, para proceder a refrigerar 10 minutos y consumir",
                  alimentos: ["Uvas", "Yogurt griego", "Semillas de Chía"],
                },
              ],
            },
            {
              img: "https://firebasestorage.googleapis.com/v0/b/nutridoc-4ee6b.appspot.com/o/plato_saludable_18.jpg?alt=media&token=b12720e1-3ad8-4cfa-9efb-0e5088407db4",
              name: "Arroz integral y pescado",
              ingredientesPlatos: [
                {
                  nombrePlato: "Arroz integral y pescado",
                  preparacion:
                    "1 taza de arroz integral con 2 pedazos pequeños de corvina y 1/2 taza de ensalada de zanahoria amarilla en rodajas, brócoli hervido, zucchinni, espinaca y 1 cucharadita de aceite de oliva",
                  alimentos: [
                    "Arroz integral",
                    "Zanahoria amarilla",
                    "Espinaca",
                    "Zucchini",
                    "Corvina",
                    "Brócoli",
                    "Aceite de Oliva",
                  ],
                },
              ],
            },
          ],
          statusDay: 0,
        },
      ],
      retoStatus: 0,
    },
  ];
  
  

  const addData = async () => {
    await create({ ...data }, "dietas");
  };

  const addDataalimentos = async () => {
    await create(dataAlimentos, "alimentos");
  };

  return (
    <div>
      agregar <button onClick={addData}>add dias</button> <hr />
      agregar alimentos<button onClick={addDataalimentos}>
        add alimentos
      </button>{" "}
    </div>
  );
};

export default agregar;
