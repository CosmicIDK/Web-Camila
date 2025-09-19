import React, { useState } from 'react';

// Datos de ejemplo para la galería de fotos
const photos = [
  { id: 1, category: 'Deportes', src: 'https://placehold.co/800x600/000000/FFFFFF?text=FOTO+1', description: 'Atleta en plena carrera con un fondo desenfocado.', size: 'normal' },
  { id: 2, category: 'Animales', src: 'https://placehold.co/1200x600/000000/FFFFFF?text=FOTO+2', description: 'Retrato de un perro de la pradera en su hábitat.', size: 'wide' },
  { id: 3, category: 'Personas', src: 'https://placehold.co/800x1200/000000/FFFFFF?text=FOTO+3', description: 'Una pareja en una boda, capturada en blanco y negro.', size: 'tall' },
  { id: 4, category: 'Deportes', src: 'https://placehold.co/800x600/000000/FFFFFF?text=FOTO+4', description: 'Jugador de baloncesto haciendo un tiro libre.', size: 'normal' },
  { id: 5, category: 'Animales', src: 'https://placehold.co/1200x1200/000000/FFFFFF?text=FOTO+5', description: 'Un majestuoso león descansando bajo el sol.', size: 'large' },
  { id: 6, category: 'Personas', src: 'https://placehold.co/800x600/000000/FFFFFF?text=FOTO+6', description: 'Niños jugando en un parque con una luz cálida.', size: 'normal' },
  { id: 7, category: 'Deportes', src: 'https://placehold.co/800x600/000000/FFFFFF?text=FOTO+7', description: 'Escalada de montaña en un acantilado rocoso.', size: 'normal' },
  { id: 8, category: 'Animales', src: 'https://placehold.co/1200x600/000000/FFFFFF?text=FOTO+8', description: 'Un búho observando desde la rama de un árbol.', size: 'wide' },
  { id: 9, category: 'Atardeceres', src: 'https://placehold.co/800x600/000000/FFFFFF?text=ATARDECER+1', description: 'Atardecer dorado sobre el mar.', size: 'normal' },
  { id: 10, category: 'Atardeceres', src: 'https://placehold.co/1200x600/000000/FFFFFF?text=ATARDECER+2', description: 'Silueta de palmeras durante un crepúsculo.', size: 'wide' },
  { id: 11, category: 'Atardeceres', src: 'https://placehold.co/800x1200/000000/FFFFFF?text=ATARDECER+3', description: 'Montañas cubiertas de nieve al atardecer.', size: 'tall' },
  { id: 12, category: 'Atardeceres', src: 'https://placehold.co/800x600/000000/FFFFFF?text=ATARDECER+4', description: 'El sol ocultándose detrás de las nubes.', size: 'normal' },
  { id: 13, category: 'Atardeceres', src: 'https://placehold.co/1200x1200/000000/FFFFFF?text=ATARDECER+5', description: 'Reflejos de la puesta de sol en un lago tranquilo.', size: 'large' },
  { id: 14, category: 'Atardeceres', src: 'https://placehold.co/800x600/000000/FFFFFF?text=ATARDECER+6', description: 'Un atardecer de tonos violetas y naranjas.', size: 'normal' },
  { id: 15, category: 'Atardeceres', src: 'https://placehold.co/800x600/000000/FFFFFF?text=ATARDECER+7', description: 'Un paisaje urbano bañado por la luz del atardecer.', size: 'normal' },
  { id: 16, category: 'Atardeceres', src: 'https://placehold.co/1200x600/000000/FFFFFF?text=ATARDECER+8', description: 'El sol poniente iluminando la costa.', size: 'wide' },
  { id: 17, category: 'Arácnidos', src: 'https://placehold.co/800x600/000000/FFFFFF?text=ARAÑA+1', description: 'Una araña tejiendo su telaraña al amanecer.', size: 'normal' },
  { id: 18, category: 'Arácnidos', src: 'https://i.imgur.com/XeLsgHi.jpeg', description: 'Primer plano de una araña saltadora verde en una madera.', size: 'tall' },
  { id: 19, category: 'Arácnidos', src: 'https://placehold.co/1200x600/000000/FFFFFF?text=ESCORPIÓN', description: 'Un escorpión en su hábitat natural bajo la luz de la luna.', size: 'wide' },
  { id: 20, category: 'Arácnidos', src: 'https://placehold.co/800x600/000000/FFFFFF?text=ARAÑA+2', description: 'Una araña viuda negra en una telaraña muy detallada.', size: 'normal' },
  { id: 21, category: 'Halloween', src: 'https://placehold.co/800x600/000000/FFFFFF?text=CALABAZA+1', description: 'Una calabaza tallada con una vela en su interior.', size: 'normal' },
  { id: 22, category: 'Halloween', src: 'https://placehold.co/1200x600/000000/FFFFFF?text=CASA+EMBRUJADA', description: 'Una vieja casa abandonada con neblina y una luna llena.', size: 'wide' },
  { id: 23, category: 'Halloween', src: 'https://placehold.co/800x1200/000000/FFFFFF?text=DULCES', description: 'Cesto lleno de dulces de Halloween.', size: 'tall' },
  { id: 24, category: 'Halloween', src: 'https://placehold.co/800x600/000000/FFFFFF?text=MURCIÉLAGOS', description: 'Siluetas de murciélagos volando al atardecer.', size: 'normal' },
  { id: 25, category: 'Halloween', src: 'https://placehold.co/800x600/000000/FFFFFF?text=DISFRAZ', description: 'Una persona disfrazada de bruja con su sombrero.', size: 'normal' },
  { id: 26, category: 'Mascotas', src: 'https://placehold.co/800x600/000000/FFFFFF?text=PERRO+1', description: 'Un perro feliz jugando en un campo con flores.', size: 'normal' },
  { id: 27, category: 'Mascotas', src: 'https://placehold.co/1200x600/000000/FFFFFF?text=GATO+1', description: 'Un gato atigrado durmiendo en un sofá acogedor.', size: 'wide' },
  { id: 28, category: 'Mascotas', src: 'https://placehold.co/800x1200/000000/FFFFFF?text=CONEJO+1', description: 'Retrato de un adorable conejo masticando una zanahoria.', size: 'tall' },
  { id: 29, category: 'Mascotas', src: 'https://placehold.co/800x600/000000/FFFFFF?text=HÁMSTER', description: 'Un pequeño hámster curioso explorando su jaula.', size: 'normal' },
  { id: 30, category: 'Mascotas', src: 'https://placehold.co/1200x1200/000000/FFFFFF?text=PECES', description: 'Un acuario colorido con peces tropicales.', size: 'large' },
  { id: 31, category: 'Mascotas', src: 'https://placehold.co/800x600/000000/FFFFFF?text=TU+FOTO+AQUI', description: 'Una nueva foto para el portafolio.', size: 'normal' },
  { id: 32, category: 'Personas', src: 'https://i.imgur.com/O7pM4oO.jpeg', description: 'dos personas hablando en el atardecer con un niño en brazos', size: 'normal' },
];

const App = () => {
  const [activeCategory, setActiveCategory] = useState('Todas');

  const categories = ['Todas', 'Animales', 'Arácnidos', 'Personas', 'Atardeceres', 'Halloween', 'Mascotas'];

  const filteredPhotos = activeCategory === 'Todas'
    ? photos
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <div className="flex flex-col sm:flex-row bg-white font-sans text-gray-900 min-h-screen">
      
      {/* Estilos para la fuente personalizada */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&display=swap');
          .font-cormorant {
            font-family: 'Cormorant Garamond', serif;
          }
        `}
      </style>
      
      {/* Barra de navegación lateral */}
      <nav className="bg-stone-900 text-white p-6 w-full sm:w-64 flex-shrink-0 sticky top-0 sm:h-screen sm:overflow-y-auto shadow-lg flex flex-col justify-between">
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-3xl font-cormorant font-bold text-white mb-6 text-center sm:text-left">Camila Dos Santos</h1>
          <ul className="flex flex-col sm:space-y-4 w-full items-center sm:items-start">
            {categories.map(category => (
              <li key={category} className="w-full">
                <button
                  onClick={() => setActiveCategory(category)}
                  className={`py-3 px-4 w-full rounded-lg text-left transition duration-300 ease-in-out ${
                    activeCategory === category
                      ? 'bg-amber-200 text-black font-semibold'
                      : 'hover:bg-amber-200 hover:text-black'
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Pie de página movido a la barra lateral */}
        <div className="mt-auto pt-6 text-center sm:text-left flex flex-col space-y-4">
          <p className="mb-2 text-sm">Contacto: <a href="mailto:fotosberrinche@gmail.com" className="text-amber-600 hover:underline">fotosberrinche@gmail.com</a></p>
          <a
            href="https://www.instagram.com/2santoscami_92?igsh=MTNtYmV6NjJzbHVhYg=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-white transition duration-300 flex items-center space-x-2"
          >
            <i className="fab fa-instagram text-3xl"></i>
            <span>Instagram</span>
          </a>
          <a
            href="https://www.facebook.com/share/1B9wD2wtoo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-white transition duration-300 flex items-center space-x-2"
          >
            <i className="fab fa-facebook-f text-3xl"></i>
            <span>Facebook</span>
          </a>
           {/* Enlace a WhatsApp */}
          <a
            href="https://wa.me/59898771005"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-white transition duration-300 flex items-center space-x-2"
          >
            <i className="fab fa-whatsapp text-3xl"></i>
            <span>WhatsApp</span>
          </a>
        </div>
      </nav>

      {/* Contenido principal y galería */}
      <div className="flex-1 flex flex-col">
        <main className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 grid-flow-dense">
            {filteredPhotos.map(photo => (
              <div
                key={photo.id}
                className={`relative overflow-hidden rounded-xl shadow-lg group ${
                  photo.size === 'wide' ? 'lg:col-span-2' : ''
                } ${
                  photo.size === 'tall' ? 'lg:row-span-2' : ''
                } ${
                  photo.size === 'large' ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.description}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="text-white text-center text-lg font-medium select-none">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
