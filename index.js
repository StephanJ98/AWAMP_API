import express from 'express'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let usuarios = [
    {
        email: 'test@test.com',
        nombre: 'Test',
        password: 'hashedpassword1',
        createdAt: '2023-10-07T08:30:00Z',
        updatedAt: '2023-10-07T10:45:00Z'
    }
]

let plantas = [
    {
        species: 'Acer platanoides',
        createdAt: '2023-10-07T09:15:00Z',
        updatedAt: '2023-10-07T09:45:00Z',
        name: 'Arce real',
        description: 'Árbol caducifolio común en Europa.',
        soil: 'Suelo bien drenado',
        temperature: 'Temperatura moderada',
        sun: 'Sombra parcial a pleno sol',
        water: 'Riego regular',
        multiplication: 'Semillas',
        image_url: 'https://example.com/arce.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Fagus sylvatica',
        createdAt: '2023-10-07T10:30:00Z',
        updatedAt: '2023-10-07T11:15:00Z',
        name: 'Haya común',
        description: 'Árbol caducifolio con hojas brillantes y suaves al tacto.',
        soil: 'Suelo húmedo y bien drenado',
        temperature: 'Temperatura fresca',
        sun: 'Sombra parcial a pleno sol',
        water: 'Riego regular',
        multiplication: 'Nueces',
        image_url: 'https://example.com/haya.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Quercus robur',
        createdAt: '2023-10-07T11:45:00Z',
        updatedAt: '2023-10-07T12:30:00Z',
        name: 'Roble común',
        description: 'Árbol caducifolio de gran tamaño y hojas lobuladas.',
        soil: 'Suelo bien drenado y rico en nutrientes',
        temperature: 'Temperatura moderada',
        sun: 'Pleno sol',
        water: 'Riego regular',
        multiplication: 'Bellotas',
        image_url: 'https://example.com/roble.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Corylus avellana',
        createdAt: '2023-10-07T13:00:00Z',
        updatedAt: '2023-10-07T13:45:00Z',
        name: 'Avellano común',
        description: 'Arbusto caducifolio con hojas aserradas y frutos comestibles.',
        soil: 'Suelo bien drenado y húmedo',
        temperature: 'Temperatura fresca',
        sun: 'Sombra parcial',
        water: 'Riego regular',
        multiplication: 'Nueces',
        image_url: 'https://example.com/avellano.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Salix alba',
        createdAt: '2023-10-07T14:15:00Z',
        updatedAt: '2023-10-07T14:45:00Z',
        name: 'Sauce blanco',
        description: 'Árbol de hoja caduca con ramas flexibles y hojas estrechas.',
        soil: 'Suelo húmedo y bien drenado',
        temperature: 'Temperatura moderada',
        sun: 'Sombra parcial',
        water: 'Riego regular',
        multiplication: 'Esquejes',
        image_url: 'https://example.com/sauce.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Juglans regia',
        createdAt: '2023-10-07T15:00:00Z',
        updatedAt: '2023-10-07T15:30:00Z',
        name: 'Nogal común',
        description: 'Árbol de hoja caduca con nueces comestibles.',
        soil: 'Suelo profundo y bien drenado',
        temperature: 'Temperatura moderada',
        sun: 'Pleno sol',
        water: 'Riego regular',
        multiplication: 'Nueces',
        image_url: 'https://example.com/nogal.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Rosa canina',
        createdAt: '2023-10-07T16:00:00Z',
        updatedAt: '2023-10-07T16:30:00Z',
        name: 'Rosa silvestre',
        description: 'Arbusto espinoso con flores rosadas y frutos rojos.',
        soil: 'Suelo bien drenado',
        temperature: 'Temperatura moderada',
        sun: 'Pleno sol',
        water: 'Riego regular',
        multiplication: 'Semillas',
        image_url: 'https://example.com/rosa.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Lavandula angustifolia',
        createdAt: '2023-10-07T17:00:00Z',
        updatedAt: '2023-10-07T17:30:00Z',
        name: 'Lavanda',
        description: 'Planta aromática con flores violetas y olor característico.',
        soil: 'Suelo bien drenado y seco',
        temperature: 'Temperatura cálida',
        sun: 'Pleno sol',
        water: 'Riego moderado',
        multiplication: 'Esquejes',
        image_url: 'https://example.com/lavanda.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Campanula rotundifolia',
        createdAt: '2023-10-07T18:00:00Z',
        updatedAt: '2023-10-07T18:30:00Z',
        name: 'Campanilla azulada',
        description: 'Planta perenne con flores azules en forma de campana.',
        soil: 'Suelo bien drenado',
        temperature: 'Temperatura moderada',
        sun: 'Sombra parcial a pleno sol',
        water: 'Riego regular',
        multiplication: 'Semillas',
        image_url: 'https://example.com/campanula.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Primula vulgaris',
        createdAt: '2023-10-07T19:00:00Z',
        updatedAt: '2023-10-07T19:30:00Z',
        name: 'Primavera común',
        description: 'Planta perenne con flores amarillas en forma de embudo.',
        soil: 'Suelo húmedo y bien drenado',
        temperature: 'Temperatura fresca',
        sun: 'Sombra parcial',
        water: 'Riego moderado',
        multiplication: 'Semillas',
        image_url: 'https://example.com/primula.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Vinca minor',
        createdAt: '2023-10-07T20:00:00Z',
        updatedAt: '2023-10-07T20:30:00Z',
        name: 'Vinca menor',
        description: 'Planta perenne con flores azules y hojas brillantes.',
        soil: 'Suelo húmedo y bien drenado',
        temperature: 'Temperatura moderada',
        sun: 'Sombra parcial a pleno sol',
        water: 'Riego regular',
        multiplication: 'Esquejes',
        image_url: 'https://example.com/vinca.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Geranium macrorrhizum',
        createdAt: '2023-10-07T21:00:00Z',
        updatedAt: '2023-10-07T21:30:00Z',
        name: 'Geranio rastrero',
        description: 'Planta perenne con flores rosadas y aroma agradable.',
        soil: 'Suelo bien drenado',
        temperature: 'Temperatura moderada',
        sun: 'Sombra parcial a pleno sol',
        water: 'Riego regular',
        multiplication: 'División de matas',
        image_url: 'https://example.com/geranium.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Ilex aquifolium',
        createdAt: '2023-10-08T09:00:00Z',
        updatedAt: '2023-10-08T09:30:00Z',
        name: 'Acebo común',
        description: 'Árbol o arbusto perenne con hojas espinosas y frutos rojos.',
        soil: 'Suelo bien drenado',
        temperature: 'Temperatura moderada',
        sun: 'Sombra parcial a pleno sol',
        water: 'Riego regular',
        multiplication: 'Semillas',
        image_url: 'https://example.com/ilex.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Myosotis arvensis',
        createdAt: '2023-10-08T10:00:00Z',
        updatedAt: '2023-10-08T10:30:00Z',
        name: 'Nomeolvides',
        description: 'Planta anual con pequeñas flores azules y hojas lanceoladas.',
        soil: 'Suelo húmedo y bien drenado',
        temperature: 'Temperatura fresca',
        sun: 'Sombra parcial',
        water: 'Riego moderado',
        multiplication: 'Semillas',
        image_url: 'https://example.com/myosotis.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Anemone nemorosa',
        createdAt: '2023-10-08T11:00:00Z',
        updatedAt: '2023-10-08T11:30:00Z',
        name: 'Anémona del bosque',
        description: 'Planta perenne con flores blancas o rosadas y hojas divididas.',
        soil: 'Suelo húmedo y bien drenado',
        temperature: 'Temperatura fresca',
        sun: 'Sombra parcial a pleno sol',
        water: 'Riego moderado',
        multiplication: 'División de matas',
        image_url: 'https://example.com/anemone.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Hyacinthoides non-scripta',
        createdAt: '2023-10-08T12:00:00Z',
        updatedAt: '2023-10-08T12:30:00Z',
        name: 'Jacinto de los bosques',
        description: 'Planta bulbosa con flores azules en forma de campana.',
        soil: 'Suelo húmedo y bien drenado',
        temperature: 'Temperatura fresca',
        sun: 'Sombra parcial a pleno sol',
        water: 'Riego moderado',
        multiplication: 'Bulbos',
        image_url: 'https://example.com/hyacinthoides.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Viola odorata',
        createdAt: '2023-10-08T13:00:00Z',
        updatedAt: '2023-10-08T13:30:00Z',
        name: 'Violeta',
        description: 'Planta perenne con flores violetas y aroma agradable.',
        soil: 'Suelo húmedo y bien drenado',
        temperature: 'Temperatura fresca',
        sun: 'Sombra parcial',
        water: 'Riego moderado',
        multiplication: 'Semillas',
        image_url: 'https://example.com/viola.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Galanthus nivalis',
        createdAt: '2023-10-08T14:00:00Z',
        updatedAt: '2023-10-08T14:30:00Z',
        name: 'Copo de nieve',
        description: 'Pequeña planta bulbosa con flores blancas colgantes.',
        soil: 'Suelo húmedo y bien drenado',
        temperature: 'Temperatura fresca',
        sun: 'Sombra parcial a pleno sol',
        water: 'Riego moderado',
        multiplication: 'Bulbos',
        image_url: 'https://example.com/galanthus.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Sambucus nigra',
        createdAt: '2023-10-08T15:00:00Z',
        updatedAt: '2023-10-08T15:30:00Z',
        name: 'Saúco negro',
        description: 'Árbol o arbusto caducifolio con flores blancas y bayas negras.',
        soil: 'Suelo bien drenado',
        temperature: 'Temperatura moderada',
        sun: 'Sombra parcial a pleno sol',
        water: 'Riego regular',
        multiplication: 'Semillas',
        image_url: 'https://example.com/sambucus.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Arum maculatum',
        createdAt: '2023-10-08T16:00:00Z',
        updatedAt: '2023-10-08T16:30:00Z',
        name: 'Cuchara de monte',
        description: 'Planta perenne con flores en forma de espadice.',
        soil: 'Suelo húmedo y bien drenado',
        temperature: 'Temperatura fresca',
        sun: 'Sombra parcial',
        water: 'Riego moderado',
        multiplication: 'División de tubérculos',
        image_url: 'https://example.com/arum.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Urtica dioica',
        createdAt: '2023-10-08T17:00:00Z',
        updatedAt: '2023-10-08T17:30:00Z',
        name: 'Ortiga común',
        description: 'Planta perenne con hojas vellosas y pelos urticantes.',
        soil: 'Suelo húmedo y bien drenado',
        temperature: 'Temperatura moderada',
        sun: 'Sombra parcial',
        water: 'Riego moderado',
        multiplication: 'Semillas',
        image_url: 'https://example.com/urtica.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Ranunculus acris',
        createdAt: '2023-10-08T18:00:00Z',
        updatedAt: '2023-10-08T18:30:00Z',
        name: 'Botón de oro',
        description: 'Planta perenne con flores amarillas y hojas palmadas.',
        soil: 'Suelo húmedo y bien drenado',
        temperature: 'Temperatura fresca',
        sun: 'Sombra parcial',
        water: 'Riego moderado',
        multiplication: 'Semillas',
        image_url: 'https://example.com/ranunculus.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Euphorbia amygdaloides',
        createdAt: '2023-10-08T19:00:00Z',
        updatedAt: '2023-10-08T19:30:00Z',
        name: 'Lechetrezna',
        description: 'Planta perenne con hojas verde oscuro y flores verdes.',
        soil: 'Suelo bien drenado',
        temperature: 'Temperatura moderada',
        sun: 'Sombra parcial a pleno sol',
        water: 'Riego moderado',
        multiplication: 'Esquejes',
        image_url: 'https://example.com/euphorbia.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Pulsatilla vulgaris',
        createdAt: '2023-10-08T20:00:00Z',
        updatedAt: '2023-10-08T20:30:00Z',
        name: 'Anémona pulsatila',
        description: 'Planta perenne con flores violetas o blancas y hojas peludas.',
        soil: 'Suelo bien drenado',
        temperature: 'Temperatura fresca',
        sun: 'Sombra parcial',
        water: 'Riego moderado',
        multiplication: 'Semillas',
        image_url: 'https://example.com/pulsatilla.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Digitalis purpurea',
        createdAt: '2023-10-08T21:00:00Z',
        updatedAt: '2023-10-08T21:30:00Z',
        name: 'Digitalis',
        description: 'Planta bienal con flores tubulares de varios colores.',
        soil: 'Suelo bien drenado y rico en humus',
        temperature: 'Temperatura fresca',
        sun: 'Sombra parcial a pleno sol',
        water: 'Riego moderado',
        multiplication: 'Semillas',
        image_url: 'https://example.com/digitalis.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Centaurea cyanus',
        createdAt: '2023-10-08T22:00:00Z',
        updatedAt: '2023-10-08T22:30:00Z',
        name: 'Aciano',
        description: 'Planta anual con flores azules intensas y hojas lanceoladas.',
        soil: 'Suelo bien drenado y fértil',
        temperature: 'Temperatura fresca',
        sun: 'Pleno sol',
        water: 'Riego moderado',
        multiplication: 'Semillas',
        image_url: 'https://example.com/centaurea.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Papaver rhoeas',
        createdAt: '2023-10-08T23:00:00Z',
        updatedAt: '2023-10-08T23:30:00Z',
        name: 'Amapola silvestre',
        description: 'Planta anual con flores rojas y hojas peludas.',
        soil: 'Suelo bien drenado',
        temperature: 'Temperatura cálida',
        sun: 'Pleno sol',
        water: 'Riego moderado',
        multiplication: 'Semillas',
        image_url: 'https://example.com/papaver.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Linaria vulgaris',
        createdAt: '2023-10-09T09:00:00Z',
        updatedAt: '2023-10-09T09:30:00Z',
        name: 'Llantén amarillo',
        description: 'Planta perenne con flores amarillas en forma de espuela.',
        soil: 'Suelo bien drenado',
        temperature: 'Temperatura moderada',
        sun: 'Sombra parcial a pleno sol',
        water: 'Riego moderado',
        multiplication: 'Semillas',
        image_url: 'https://example.com/linaria.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Galium verum',
        createdAt: '2023-10-09T10:00:00Z',
        updatedAt: '2023-10-09T10:30:00Z',
        name: 'Gallium',
        description: 'Planta perenne con flores amarillas y hojas en verticilos.',
        soil: 'Suelo bien drenado y fértil',
        temperature: 'Temperatura fresca',
        sun: 'Sombra parcial a pleno sol',
        water: 'Riego moderado',
        multiplication: 'Semillas',
        image_url: 'https://example.com/galium.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Iris pseudacorus',
        createdAt: '2023-10-09T11:00:00Z',
        updatedAt: '2023-10-09T11:30:00Z',
        name: 'Lirio amarillo',
        description: 'Planta perenne con flores amarillas y hojas en forma de espada.',
        soil: 'Suelo húmedo y bien drenado',
        temperature: 'Temperatura fresca',
        sun: 'Sombra parcial a pleno sol',
        water: 'Riego moderado',
        multiplication: 'División de rizomas',
        image_url: 'https://example.com/iris.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Hypericum perforatum',
        createdAt: '2023-10-09T12:00:00Z',
        updatedAt: '2023-10-09T12:30:00Z',
        name: 'Hierba de San Juan',
        description: 'Planta perenne con flores amarillas y hojas perforadas.',
        soil: 'Suelo bien drenado',
        temperature: 'Temperatura cálida',
        sun: 'Pleno sol',
        water: 'Riego moderado',
        multiplication: 'Semillas',
        image_url: 'https://example.com/hypericum.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Euphrasia officinalis',
        createdAt: '2023-10-09T13:00:00Z',
        updatedAt: '2023-10-09T13:30:00Z',
        name: 'Eufrasia',
        description: 'Planta anual o bienal con flores blancas o amarillas y hojas dentadas.',
        soil: 'Suelo bien drenado',
        temperature: 'Temperatura fresca',
        sun: 'Sombra parcial',
        water: 'Riego moderado',
        multiplication: 'Semillas',
        image_url: 'https://example.com/euphrasia.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Bellis perennis',
        createdAt: '2023-10-09T14:00:00Z',
        updatedAt: '2023-10-09T14:30:00Z',
        name: 'Margarita común',
        description: 'Planta perenne con flores blancas o rosadas y hojas dentadas.',
        soil: 'Suelo bien drenado',
        temperature: 'Temperatura fresca',
        sun: 'Sombra parcial',
        water: 'Riego moderado',
        multiplication: 'Semillas',
        image_url: 'https://example.com/bellis.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Potentilla reptans',
        createdAt: '2023-10-09T15:00:00Z',
        updatedAt: '2023-10-09T15:30:00Z',
        name: 'Cincoenrama',
        description: 'Planta perenne con flores amarillas y hojas divididas en cinco lóbulos.',
        soil: 'Suelo bien drenado',
        temperature: 'Temperatura fresca',
        sun: 'Sombra parcial',
        water: 'Riego moderado',
        multiplication: 'División de raíces',
        image_url: 'https://example.com/potentilla.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Ilex aquifolium',
        createdAt: '2023-10-10T09:00:00Z',
        updatedAt: '2023-10-10T09:30:00Z',
        name: 'Acebo común',
        description: 'Árbol o arbusto perenne con hojas espinosas y frutos rojos.',
        soil: 'Suelo bien drenado',
        temperature: 'Temperatura moderada',
        sun: 'Sombra parcial a pleno sol',
        water: 'Riego regular',
        multiplication: 'Semillas',
        image_url: 'https://example.com/ilex.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Myosotis arvensis',
        createdAt: '2023-10-10T10:00:00Z',
        updatedAt: '2023-10-10T10:30:00Z',
        name: 'Nomeolvides',
        description: 'Planta anual con pequeñas flores azules y hojas lanceoladas.',
        soil: 'Suelo húmedo y bien drenado',
        temperature: 'Temperatura fresca',
        sun: 'Sombra parcial',
        water: 'Riego moderado',
        multiplication: 'Semillas',
        image_url: 'https://example.com/myosotis.jpg',
        userEmail: 'test@test.com'
    },
    {
        species: 'Anemone nemorosa',
        createdAt: '2023-10-10T11:00:00Z',
        updatedAt: '2023-10-10T11:30:00Z',
        name: 'Anémona del bosque',
        description: 'Planta perenne con flores blancas o rosadas y hojas divididas.',
        soil: 'Suelo húmedo y bien drenado',
        temperature: 'Temperatura fresca',
        sun: 'Sombra parcial a pleno sol',
        water: 'Riego moderado',
        multiplication: 'División de matas',
        image_url: 'https://example.com/anemone.jpg',
        userEmail: 'test@test.com'
    }
]

console.log(plantas.length)

app.get('/usuarios', (req, res) => {
    res.json(usuarios)
})

app.get('/usuarios/:email', (req, res) => {
    const userEmail = req.params.email
    const usuario = usuarios.find(user => user.email === userEmail)
    if (usuario) {
        res.json(usuario)
    } else {
        res.status(404).send('Usuario no encontrado')
    }
})

app.post('/usuarios', (req, res) => {
    const nuevoUsuario = req.body
    const emailExistente = usuarios.some(user => user.email === nuevoUsuario.email)
    if (emailExistente) {
        res.status(400).send('El email ya está registrado')
    } else {
        nuevoUsuario.createdAt = new Date().toISOString()
        nuevoUsuario.updatedAt = new Date().toISOString()
        usuarios.push(nuevoUsuario)
        res.json(nuevoUsuario)
    }
})

app.put('/usuarios/:email', (req, res) => {
    const userEmail = req.params.email;
    const { email, ...nuevosDatos } = req.body;

    if (userEmail !== email) return res.status(403).json({ mensaje: 'No tienes permisos para modificar este usuario' })

    const usuario = usuarios.find(usuario => usuario.email === userEmail);

    if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' })

    usuario.updatedAt = new Date().toISOString();
    Object.assign(usuario, nuevosDatos);
    res.json({ mensaje: 'Usuario actualizado correctamente', usuario });
});

app.delete('/usuarios/:email', (req, res) => {
    const userEmail = req.params.email;

    if (userEmail !== req.body.email) return res.status(403).json({ mensaje: 'No tienes permisos para eliminar este usuario' })
    const index = usuarios.findIndex(usuario => usuario.email === userEmail);
    if (index === -1) return res.status(404).json({ mensaje: 'Usuario no encontrado' })

    usuarios.splice(index, 1);

    // Elimina las plantas asociadas a este usuario
    plantas = plantas.filter(planta => planta.userEmail !== userEmail);
    res.json({ mensaje: 'Usuario eliminado correctamente' });
});

app.get('/plantas', (req, res) => {
    res.json(plantas)
})

app.get('/plantas/:species', (req, res) => {
    const plantaSpecies = req.params.species
    const planta = plantas.find(p => p.species === plantaSpecies)
    if (planta) res.json(planta)
    else res.status(404).send('Planta no encontrada')
})

app.post('/plantas', (req, res) => {
    const nuevaPlanta = req.body
    const speciesExistente = plantas.some(p => p.species === nuevaPlanta.species)
    if (speciesExistente) res.status(400).send('La especie ya está registrada')
    else {
        nuevaPlanta.createdAt = new Date().toISOString()
        nuevaPlanta.updatedAt = new Date().toISOString()
        plantas.push(nuevaPlanta)
        res.json(nuevaPlanta)
    }
})

app.put('/plantas/:id', (req, res) => {
    const plantaId = req.params.id
    const { userEmail, ...nuevosDatos } = req.body
    const planta = plantas.find(planta => planta.id === plantaId)

    if (!planta) return res.status(404).json({ mensaje: 'Planta no encontrada' })
    if (planta.userEmail !== userEmail) return res.status(403).json({ mensaje: 'No tienes permisos para modificar esta planta' })

    planta.updatedAt = new Date().toISOString()
    Object.assign(planta, nuevosDatos)
    res.json({ mensaje: 'Planta actualizada correctamente', planta })
})

app.delete('/plantas/:id', (req, res) => {
    const plantaId = req.params.id
    const { userEmail } = req.body
    const index = plantas.findIndex(planta => planta.id === plantaId)

    if (index === -1) return res.status(404).json({ mensaje: 'Planta no encontrada' })

    if (plantas[index].userEmail !== userEmail) return res.status(403).json({ mensaje: 'No tienes permisos para eliminar esta planta' })

    plantas.splice(index, 1)
    res.json({ mensaje: 'Planta eliminada correctamente' })
})

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`)
})
