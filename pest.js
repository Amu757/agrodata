// search bar 
$(document).ready(function () {
    $('.searchbar select').chosen();
});

// all crop information to show dynamicaly
information = {
    rice: {
        images: ["blast.jpg", "Brown_plant.jpg", "Tungro_Disease.jpg", "Rice_Whorl.jpg", "Sheath_Blight.jpg", "Bacterial_Leaf.jpg", "False_smut.jpg", "Rice_Ragged.jpg", "Stem_Rot.jpg", "Brown_Spot.jpg", "blast.jpg"],
        disName: ["Blast", "Brown Plant Hopper", "Tungro Disease", "Whorl Maggot", "Sheath Blight", "Backterial Leaf", "False Smut", "Ragged stunt Virus", "Stem Rot", "Brown spot", "Blast"],
        define: {
            blast: "Blast, caused by the fungal pathogen Pyricularia oryzae, is a significant and destructive disease that affects rice plants."
        },
        symtoms: {
            blast: [`<ul>
                    <li>Blast primarily manifests as lesions on different parts of the rice plant, including leaves,
                        stems, and grains.</li>
                    <li>Leaf blast: Lesions appear as spindle-shaped or elliptical spots, initially light green or
                        gray, and later turn brown or
                        whitish with a characteristic diamond shape.</li>
                    <li>Neck blast: Lesions occur on the neck region of the panicle and can extend downwards to the
                        upper nodes.</li>
                    <li>Panicle blast: The fungal infection can cause panicle blight, affecting the grains and
                        causing shriveling,
                        discoloration, and poor grain filling.</li>
                </ul>`]
        }, cycle: {
            blast: [`<ul>
                    <li>The blast fungus survives in infected plant debris, soil, and even on weed hosts during the
                        off-season.</li>
                    <li>Spores called conidia are produced in lesions and spread through wind, rain, irrigation
                        water, or equipment to infect
                        new plants.</li>
                    <li>Humid and warm weather conditions favor the development and spread of blast.</li>
                </ul>`]
        },
        impact: {
            blast: [`<ul>
                    <li>Blast is a destructive disease that can cause significant yield losses in rice crops.</li>
                    <li>Severe infection can lead to complete panicle sterility, resulting in a total loss of grain
                        production.</li>
                    <li>Grain quality may also be affected, with reduced size, discoloration, and susceptibility to
                        other pathogens.</li>
                </ul>`]
        },
        control: {
            blast: [`<ul>
                    <li>Planting rice varieties resistant to the rice blast is one of the most practical and economical
                        ways to control
                        the rice blast. ADT 36, ADT 37, ASD 16, ASD 20, ADT 39, ASD 19, TPS 3, White Ponni, ADT 44, IR
                        64, and IR 36 are
                        some of the varieties proven to be more tolerant.</li>

                    <li>A high level of nitrogen fertilization, aerobic soil conditions, and drought stress are all
                        factors that favor
                        blasts. Therefore, the susceptibility of rice to the disease is increased due to high nitrogen
                        rates and nitrate
                        nitrogen. Additionally, extended drain periods may also encourage the disease by aerating the
                        soil, converting
                        ammonium to nitrate, and causing drought stress to the rice plant. Hence it is advisable to
                        apply nitrogen
                        fertilizer in three split doses to avoid excessive nitrogen application.</li>

                    <li>Identify and avoid blast-infested seeds in areas where the blast is not a problem by sampling
                        and testing seeds
                        in areas where the blast is not a problem. Through this, it may be possible to limit the spread
                        of the disease
                        into areas that are not infested.</li>

                    <li>The use of water seeding is recommended to reduce or eliminate the transmission of disease from
                        seed to
                        seedlings. The use of drill seeding is not recommended due to the possibility of seed
                        transmission, nitrate
                        formation, and drought stress that can occur.</li>

                    <li>For blast development to be limited, it is recommended that continuous flooding is carried out.
                        Field drainage
                        should be avoided, especially for long periods, since this allows nitrate to form and may result
                        in drought
                        stress in fields. The results of some studies in other areas suggest that shallow water is more
                        conducive to
                        blast development than deeper water in some areas.</li>
                </ul>`, `<ul>
                    <h4>Chemical methods</h4>
                    <li> <b>Dry seed Treatment</b> <br>you should add at least 2 gr of thiram, captan, carboxin,or
                        carbendazim per kg fo seeds. Before soaking seeds for sprouting, treat them at least 24 hours in
                        advace. Seeds treated with this method can be stored for 30 days without losing viability </li>
                    <li><b>Wet seed treatment</b><br>Carbendazim or Tricyclozole can be added to the seed water at a
                        rate of 2 grams per liter of water for each kilogram of
                        seed. You must soak the seeds in the solution for two hours. Drain the solution, sprout the
                        seeds, and sow them in a
                        nursery bed as soon as they have sprouted. As a result of this wet seed treatment, seedlings are
                        protected from seedling
                        diseases such as blast for up to 40 days, and this method is more effective than the dry seed
                        treatment for preventing
                        seedling diseases <br>
                        <br>Alternatively, the seeds can be treated with a talc-based formulation of P. fluorescens
                        (Pf1) at a rate of 10 grams per
                        kg of seed, soaked overnight in 1 lit of water, and treated the following morning. The excess
                        water should be drained,
                        and the seeds should be allowed to sprout for 24 hours before being sown.
                    </li>
                    <li><b>Seedling dip with Pseudomonas fluorescens</b><br>In the main field, stagnate water to a depth
                        of 2.5 cm over a surface area of 25 square meters. The talc-based
                        formulation of Pseudomonas fluorescens (Pf1) should be sprinkled over 2.5 kg of stagnant water
                        and mixed. As soon as the
                        seedlings are taken out from the nursery, they should be soaked in stagnated water for 30
                        minutes before they are
                        transplanted into the main field.</li>
                </ul>`, `<table class="has-fixed-layout">
                    <tbody>
                        <tr>
                            <td><strong>Chemical compound</strong></td>
                            <td><strong>Dosage per Hectare</strong></td>
                        </tr>
                        <tr>
                            <td>Carbendazim 50WP</td>
                            <td>500 grams</td>
                        </tr>
                        <tr>
                            <td>Tricyclozole 75 WP</td>
                            <td>500 grams</td>
                        </tr>
                        <tr>
                            <td>Metominostrobin 20 SC</td>
                            <td>500 ml</td>
                        </tr>
                        <tr>
                            <td>Azoxystrobin 25 SC</td>
                            <td>500 ml</td>
                        </tr>
                    </tbody>
                </table>`]
        },
        idm: {
            blast: [`<ul>
                    <li>Integrated disease management approaches involve combining multiple strategies for effective
                        blast control.</li>
                    <li>Resistant Varieties: Planting blast-resistant rice varieties is an effective strategy to
                        mitigate the impact of the
                        disease.</li>
                    <li>This includes the use of resistant varieties, cultural practices, fungicides (if necessary),
                        and proper timing of
                        irrigation to minimize disease favorability.</li>
                    <li>Adopting IDM practices can help reduce the reliance on chemical control and promote
                        sustainable management.</li>
                </ul>`]
        }
    },
    wheat: {
        images: ["Fusarium_Head_Blight.jpg", "Karnal_Bunt.jpg", "Leaf_Blotch.jpg", "Loose_Smut.png", "Powdery-mildew-of-wheat.webp", "Root_Rot.png", "Rust.jpg", "Septoria_Leaf_Spot.jpg", "Take_All_Disease.jfif", "Tan_Spot.jpg", "Fusarium_Head_Blight.jpg"],
        disName: ["Karnal Bunt", "Leaf Blotch", "Loose Smut", "Powdery Mildew", "Root Rot", "Rust Disease", "Septoria Leaf Spot", "Take-All Disease", "Tan Spot", "Fusarium Head Blight", "Karnal Bunt"],
        define: {
            Karnal_Bunt: "Rust diseases are a group of fungal diseases that commonly affect wheat crops, caused by different species of rust fungi such as Puccinia graminis, Puccinia triticina, and Puccinia striiformis. These diseases can cause significant yield losses and reduce grain quality. plants."
        },
        symtoms: {
            Karnal_Bunt: [`<ul>
                    <li>Leaf Rust: Leaf rust is caused by the fungus Puccinia triticina and is one of the most common
                        rust diseases affecting wheat.</li>
                    <li>Symptoms:</li>
                    <ul>
                        <li>Orange to reddish-brown pustules or spore masses develop on the leaves, primarily on the
                            upper surface.</li>
                        <li>The pustules can coalesce and form larger areas of infection.</li>
                        <li>As the disease progresses, the leaves turn yellow and may eventually die prematurely.</li>
                    </ul>
                    <li>Stem Rust: Stem rust, caused by the fungus Puccinia graminis, can be a severe threat to wheat
                        crops.</li>
                    <li>Symptoms:</li>
                    <ul>
                        <li>Reddish-brown to black pustules appear on the stems, leaves, and even the heads of wheat
                            plants.</li>
                        <li>These pustules contain masses of spores and can cause elongated, black stripes or streaks on
                            the stems.</li>
                        <li>Severe infections can lead to lodging (plants bending or falling over) and significant yield
                            losses.</li>
                    </ul>
                    <li>Stripe Rust:
                        Stripe rust, caused by the fungus Puccinia striiformis, is another common rust disease in wheat.
                    </li>
                    <li>Symptoms:</li>
                    <ul>
                        <li>Yellow to orange pustules develop on the leaves, arranged in parallel lines (stripes).</li>
                        <li>The pustules may merge and form larger infected areas.</li>
                        <li>As the disease progresses, the leaves turn yellow, and premature leaf senescence can occur.
                        </li>
                    </ul>
                </ul>`]
        },
        cycle: {
            Karnal_Bunt: [`<ul>
                    <li>Rust fungi survive between seasons on living wheat plants (as teliospores), as well as on crop
                        debris, volunteer wheat,
                        and alternative hosts.</li>
                    <li>Spores (urediniospores) produced in pustules are wind-dispersed and can travel long distances to
                        infect new plants.</li>
                    <li>Moisture and moderate temperatures promote spore germination and disease development.</li>
                </ul>`]
        },
        impact: {
            Karnal_Bunt: [`<ul>
                    <li>Severe infections can lead to reduced grain size, weight, and protein content.</li>
                    <li>Rust diseases can cause significant yield losses in wheat crops, affecting grain quality and
                        overall productivity.</li>
                    <li>Premature leaf senescence can reduce photosynthetic capacity and affect nutrient translocation
                        to developing grains.</li>
                </ul>`]
        },
        control: {
            Karnal_Bunt: [`<ul>
                    <li>Resistant Varieties: Planting rust-resistant wheat varieties is the most effective strategy for
                        managing rust diseases.</li>
                    <li>Fungicides: In cases of severe rust infections, fungicide applications can be considered,
                        following recommended
                        guidelines and timing.</li>
                    <li>Crop Rotation: Implementing proper crop rotation practices helps break the disease cycle and
                        reduces inoculum levels.</li>
                    <li>Removal of Infected Debris: Thoroughly clean and remove crop debris to minimize overwintering
                        rust fungi.</li>
                    <li>Monitoring and Early Detection: Regular field scouting and monitoring for rust symptoms aid in
                        timely intervention.</li>
                    <li>Integrated Disease Management (IDM): Combining multiple strategies such as resistant varieties,
                        cultural practices, and
                        fungicides (if necessary) can provide effective control while minimizing reliance on chemical
                        control.</li>
                </ul>`]
        },
        idm: {
            Karnal_Bunt: [`<ul>
                    <li>Cultural Practices:
                        Implementing cultural practices can help reduce the incidence and severity of rust diseases.
                        Some practices include: <ul>
                            <li>Crop Rotation: Rotating wheat with non-host crops can break the disease cycle by
                                interrupting the survival and reproduction of rust pathogens. This reduces the inoculum
                                levels in the field.</li>
                            <li>Timely Sowing: Planting wheat at the recommended time can help avoid peak periods of
                                rust disease development, reducing
                                the risk of infection.</li>
                            <li>Adequate Spacing: Proper spacing between plants allows for better air circulation and
                                drying of foliage, creating
                                unfavorable conditions for rust pathogens.</li>
                        </ul>
                    </li>
                    <li>Resistant Varieties: Planting rust-resistant wheat varieties is a fundamental component of IDM.
                        Breeding programs have developed wheat
                        varieties with genetic resistance to specific rust pathogens. These varieties possess genes that
                        provide protection
                        against rust infections, reducing the need for fungicides and minimizing yield losses.</li>
                    <li>Fungicides (if necessary):
                        In severe cases of rust infections, fungicides may be necessary to control the disease. However,
                        the use of fungicides
                        should be integrated into an IDM approach and applied judiciously. Consider the following
                        guidelines: <ul>
                            <li>Fungicide Resistance Management: Rotate the use of different fungicides with different
                                modes of action to reduce the
                                risk of developing fungicide resistance in rust pathogens.</li>
                            <li>Application Timing: Apply fungicides when rust diseases are in their early stages or
                                during favorable environmental
                                conditions for disease development. This helps prevent severe infections and minimize
                                the overall fungicide usage.
                            </li>
                        </ul>
                    </li>
                    <li>Monitoring and Early Detection:
                        Regular field scouting and monitoring for rust symptoms are essential for timely disease
                        management. Early detection
                        allows for early intervention, such as targeted fungicide applications or implementation of
                        cultural practices, reducing
                        the disease's impact on crop yield and quality.</li>
                    <li>Decision Support Systems:
                        Using decision support systems, such as predictive models or disease forecasting tools, can aid
                        in determining the
                        optimal timing for implementing disease management strategies. These systems consider weather
                        conditions, crop growth
                        stage, and disease progression to provide recommendations for disease control measures.</li>
                    <li>Integrated Pest Management (IPM):
                        IDM should be integrated with other pest management practices. This includes considering other
                        pests and diseases that
                        may interact with rust diseases and applying appropriate control measures. IPM promotes a
                        holistic and sustainable
                        approach to crop protection.</li>
                </ul>`]
        }
    }
}

//shows slider images with selceted crop name
slectcrop.onchange = function () {
    let imagediv = document.querySelectorAll(".slideritem");
    let namediv = document.querySelectorAll(".names li");
    document.querySelector('.slider').style.animationPlayState = 'running';
    let path;
    switch (this.value) {
        case "Rice":
            // change images 
            path = "./media/diseases/rice/";
            for (let i = 0; i < imagediv.length; i++) {
                imagediv[i].style.backgroundImage = `url(${path}${information.rice.images[i]})`;
            }
            // change their names 
            for (let i = 0; i < namediv.length; i++) {
                namediv[i].innerHTML = information.rice.disName[i];
                namediv[i].style.backgroundColor = "rgba(0, 0, 0, 0.521)";
            }

            // remove old info on page
            showdata(0);
            break;
        case "Wheat":
            // change images
            path = "./media/diseases/wheat/";
            for (let i = 0; i < imagediv.length; i++) {
                imagediv[i].style.backgroundImage = `url(${path}${information.wheat.images[i]})`;
            }
            // change their names
            for (let i = 0; i < namediv.length; i++) {
                namediv[i].innerHTML = information.wheat.disName[i];
                namediv[i].style.backgroundColor = "rgba(0, 0, 0, 0.521)";
            }
            // remove old info on page
            showdata(0);
            break;
        default:
        // code block
    }

}

//when click on slider images shows relative information
function showdata(num) {
    // get elements to manipulate 
    let selectedcrop = document.getElementById("slectcrop");
    let imgwindow = document.getElementById("photoframe");
    let Disname = document.getElementById("diseaseName");
    let Define = document.getElementById("define");
    let Symtoms = document.getElementById("symtoms");
    let Cycle = document.getElementById("cycle");
    let Impact = document.getElementById("impact");
    let Control = document.getElementById("control");
    let idm = document.getElementById("idm");

    let dataDiv = document.getElementsByClassName('loading');
    // this call is for blank the page
    if (num == 0) {
        imgwindow.style.backgroundImage = '';
        Disname.innerHTML = '';
        Define.innerHTML = '';
        Symtoms.innerHTML = '';
        Cycle.innerHTML = '';
        Impact.innerHTML = '';
        Control.innerHTML = '';
        idm.innerHTML = '';
        // remove animation of data divs
        for (let i = 0; i < dataDiv.length; i++) {
            dataDiv[i].classList.remove('load2');
        }
        return;
    }

    // show data with disease selection
    switch (selectedcrop.value) {
        case "Rice":
            // change image 
            path = "./media/diseases/rice/";
            imgwindow.style.backgroundImage = `url(${path}${information.rice.images[num - 1]})`;
            Disname.innerHTML = information.rice.disName[num - 1];
            Define.innerHTML = information.rice.define.blast;
            Symtoms.innerHTML = information.rice.symtoms.blast;
            Cycle.innerHTML = information.rice.cycle.blast;
            Impact.innerHTML = information.rice.impact.blast;
            Control.innerHTML = information.rice.control.blast;
            idm.innerHTML = information.rice.idm.blast;
            break;
        case "Wheat":
            // change images
            path = "./media/diseases/wheat/";
            imgwindow.style.backgroundImage = `url(${path}${information.wheat.images[num - 1]})`;
            Disname.innerHTML = information.wheat.disName[num - 1];
            Define.innerHTML = information.wheat.define.Karnal_Bunt;
            Symtoms.innerHTML = information.wheat.symtoms.Karnal_Bunt;
            Cycle.innerHTML = information.wheat.cycle.Karnal_Bunt;
            Impact.innerHTML = information.wheat.impact.Karnal_Bunt;
            Control.innerHTML = information.wheat.control.Karnal_Bunt;
            idm.innerHTML = information.wheat.idm.Karnal_Bunt;
            break;
        default:
    }

    // start animation of data divs
    for (let i = 0; i < dataDiv.length; i++) {
        dataDiv[i].classList.add('load2');
    }
}
