import { ExperienceType } from "./portfolio";

export const portfolioDataEn = [
  {
    id: 1,
    title: "STARVESSEL HALO\nPower Bank",
    brief: "Industrial bionic product modeling and design",
    imgUrl: "https://i.meee.com.tw/RnWTGC5.png",
    bannerUrl: "https://i.meee.com.tw/r3JfVvg.png",
    videoUrl: "https://www.youtube.com/shorts/H45J3gs0_x8?feature=share",
    coverPosition: "53% 50%",
    coverScale: "1.15",
    category: "Industrial Product Design / Bionic Design",
    date: "2025.06",
    description: "StarVessel Halo is a multi-functional power bank designed for modern mobile life. As people need more power during travel, commuting, and outdoor activities, traditional power banks only provide a single charging function and lack versatility. Therefore, this project uses 'multi-functional integration' and 'future technology' as its core concepts. Combined with bionic design, it rethinks the role of power banks in daily life.\n\nBy integrating wireless charging, a hidden folding plug, a multi-point suction structure, and an LED energy display, StarVessel Halo is not just a power bank. It can also turn into a desktop charging stand and a phone holder, making charging more convenient and intuitive.",
    designConcept: "StarVessel Halo is a multi-functional power bank designed for modern mobile life. As people need more power during travel, commuting, and outdoor activities, traditional power banks only provide a single charging function and lack versatility. Therefore, this project uses 'multi-functional integration' and 'future technology' as its core concepts. Combined with bionic design, it rethinks the role of power banks in daily life. By integrating wireless charging, a hidden folding plug, a multi-point suction structure, and an LED energy display, StarVessel Halo is not just a power bank. It can also turn into a desktop charging stand and a phone holder, making charging more convenient and intuitive.",
    gallery: [
      "https://i.meee.com.tw/NGIh01s.jpg",
      "https://i.meee.com.tw/Co2eiWB.jpg",
      "https://i.meee.com.tw/SZKvCEw.jpg",
      "https://i.meee.com.tw/yibU4Lf.png",
    ],
    posterUrl: ["https://i.meee.com.tw/dzHeT4x.png"],
    challenge: "This project aims to design a multi-functional power bank that is not just a concept, but a practical device. However, during the design process, I found that my understanding of electronic structures and circuit layouts was limited. Therefore, integrating the power module, wireless charging, and LED display system within a limited space became the main challenge.",
    solution: "To make the design more practical, I actively visited electronic material stores to ask the owners about the basic circuits of power banks and wireless charging modules. I learned how different components are connected and how they work. Through these conversations and research, I gradually understood how to arrange electronic components. I then applied this knowledge to my product design, making it not just an appearance concept, but closer to a real product.",
    tools: ["PTC Creo", "3D Print", "Adobe Illustrator", "Adobe Photoshop", "AutoCAD"],
    process: [
      {
        phase: "Observation & Inspiration: Bionic Concept",
        details: "Source of inspiration: Looking for inspiration in nature, I observed the unique multi-arm symmetrical structure of starfish. This structure represents high stability and grip in nature.\n\nInitial idea: I drew 10 different bionic product sketches (such as insect joints, plant fiber structures, etc.), and finally chose 'starfish' as the core.\n\nReason for choice: The starfish's five-point or six-point radial shape is not only beautiful but also provides multi-directional connection points, breaking the rigid square design of traditional power banks."
      },
      {
        phase: "Function Definition & Appearance Design",
        details: "Design goal:\nCreate a multi-purpose mobile energy center.\n\nCore function integration:\n1. Wireless charging: Use the flat center area as a wireless charging pad.\n2. Multi-functional tentacles: Simulate starfish tube feet, designed to store cables or act as suction cups.\n3. Hidden plug: Integrate a folding plug, combining the charger and power bank.\n4. Visual feedback: Design an LED power display ring in the center to give the product a sense of life."
      },
      {
        phase: "3D Modeling & Manufacturing",
        details: "Transform the emotional bionic concept into rational engineering, ensuring StarVessel Halo is both beautiful and practical for mass production.\n\nParametric modeling (Creo): Set the diameter to 12cm and thickness to 2.5cm. Optimize internal volume and simulate the mechanical tolerance of tentacle folding and plug rotation using Creo.\n\nInternal space & wiring research: Conduct space analysis and section analysis to calculate the shell thickness. Ensure the battery, PCB board, and mechanism fit perfectly without interfering with each other.\n\n3D printing & function verification: Make a 1:1 physical prototype to test the ergonomic grip, plug opening resistance, and the stability of the multi-point support.\n\nVisual integration: Use Keyshot and AI to render materials and lighting, simulating the texture of matte metal and LED lights, and finally complete the exhibition board."
      },
      {
        phase: "Circuit Research & Function Integration",
        details: "The goal of this stage is to make a 'working' prototype, combining the bionic shell with the core functions.\n\nCircuit planning:\nDeeply study the hardware layout of Qi wireless charging coils and multi-port outputs (USB/Type-C). Ensure the internal electronic components run smoothly without signal interference.\n\nSpace challenge:\nIntegrate components into the narrow space inside the starfish shell. Due to space limits, I placed the battery room outside to prioritize the stable arrangement of the core circuit board and induction coil.\n\nVisual interaction:\nThe central light ring (Halo) is designed to show the power and charging status. The abstract power level is visualized through color changes and segment lengths, adding dynamic digital life to the bionic shape.\n\nFinal output & reflection:\nSuccessfully developed the StarVessel Halo with physical power output ability. Although its power supply performance is not as good as mass-produced power banks, it has completed a great leap from observation to implementation in terms of bionic appearance and material integration."
      }
    ],
    reflection: "Making StarVessel Halo was a very passionate and challenging attempt for me. At first, I just wanted to challenge the unique bionic shape of a starfish to break the stereotype that power banks are always square. But during the design process, I realized that if it only has a cool shell, it's just a model, not a real 'product'.\n\nTo make the design work in reality, I faced a big bottleneck—I knew almost nothing about internal circuits. So I decided to step out of school and go directly to an electronic material store to ask the boss. I learned everything step by step, from basic wireless charging coils to Type-C wiring logic. Although in the modeling stage, I found that the narrow space of the starfish couldn't fit all the parts, and I had to use an external battery box as a compromise, this process taught me how to reserve space more rationally in Creo.\n\nAlthough this prototype is far behind professional products in charging performance and size, the most precious thing for me is that I personally turned one of my 10 sketches into a real object that can glow and supply power through 3D printing, circuit wiring, and painting. This project made me understand that a designer's job is not just drawing beautiful pictures, but finding the perfect balance between technical limits and aesthetic pursuit."
  },
  {
    id: 2,
    title: "Channel\nSwimming Guide System",
    brief: "Combining innovative technology and industrial design",
    imgUrl: "https://i.meee.com.tw/TZ9xXJU.png",
    coverPosition: "50% 0%",
    coverScale: "115%",
    category: "Sports Technology Product",
    date: "2025.12",
    description: "Channel is an open water swimming guide system designed for visually impaired people. It aims to solve the problem of missing direction and safety information for visually impaired athletes in oceans and lakes. The system consists of a vibrating guide bracelet, a positioning buoy, and a race monitoring App. Through GPS positioning and tactile vibration prompts, it helps swimmers correct their course, maintain their pace, and finish the race safely. The backend platform can monitor the athletes' positions and status in real time, quickly starting rescue mechanisms in emergencies. This design centers on 'tactile equivalent vision', improving the safety, fairness, and inclusivity of open water races, allowing visually impaired people to challenge water sports more confidently and safely.",
    designConcept: "This design uses 'tactile equivalent vision' as its core concept, turning visual information into perceivable vibration language, so visually impaired people can clearly grasp direction and distance in open water. The product shape features smooth lines and rounded corners, matching the flow of the water environment and reducing resistance and collision risks. The overall design emphasizes the balance between function and emotion: while providing technological guidance and safety mechanisms, it still preserves the independence and fairness of the sport itself. Through a simple interface, clear tactile feedback, and a stable channel system, it builds a more inclusive water sports experience, reflecting the ideas of 'equal participation' and 'improving society through design'.",
    gallery: [
      "https://i.meee.com.tw/UCsUP4y.jpg",
      "https://i.meee.com.tw/uW1jbGR.jpg",
      "https://i.meee.com.tw/4d1D5zq.jpg",
      "https://i.meee.com.tw/VFtp0JL.png",
    ],
    bannerUrl: "https://i.meee.com.tw/06CzWJm.png",
    posterUrl: [
      "https://i.meee.com.tw/JPTb7VG.jpg",
      "https://i.meee.com.tw/L3iwCd4.jpg"
    ],
    team: {
      members: "Yu-Chen Lin / Chen-Hao Chang",
      advisors: "Kai-Shu Lee / Wei-Chen Chang"
    },
    challenge: "In product styling design, the biggest challenge of this project came from the complexity of surface modeling.\nTo present the shape idea in the original sketch, I designed the appearance of the buoy as a structure that gradually transitions from a top triangle to a bottom circle. This shape, which changes from a geometric triangle to a circular base, requires the surface to balance smoothness and proportion during the transition. Therefore, it added considerable difficulty in the 3D modeling stage.",
    solution: "During the actual modeling process, to make the surface turning natural without unnecessary creases or distortion, I spent a lot of time repeatedly adjusting the surface modeling and boundary control in Creo. During this process, I also actively asked my advising teacher for related modeling skills, and reviewed Creo's surface modeling courses to deeply understand the methods of surface creation and boundary control. By controlling surface continuity, trimming transition lines, and rebuilding surface and boundary relationships multiple times, I gradually optimized the smoothness and overall proportion of the surface. In the end, the shape not only matched the original design concept but also maintained the overall aesthetic and structural logic of the product.",
    tools: ["Illustrator", "Canva", "3D Print", "PTC Creo"],
    process: [
      {
        phase: "Early Research",
        details: "Observed the open water swimming environment, analyzed the direction judgment and safety issues visually impaired swimmers might face during swimming, and established the design goal of this project."
      },
      {
        phase: "Concept Ideation",
        details: "By drawing user maps and collecting data, I analyzed usage scenarios and needs, and proposed the concept of a navigation system centered on 'channel buoy + vibration bracelet'."
      },
      {
        phase: "Shape Exploration",
        details: "Through multiple buoy appearance sketch explorations, I finally established a shape design that gradually transitions from a triangle to a circular bottom. This improves product recognition while ensuring wave resistance and stability in the water."
      },
      {
        phase: "3D Modeling & Design Adjustment",
        details: "Used Creo for product modeling, repeatedly adjusted surface modeling and boundary control, and asked teachers for skills. I also reviewed Creo courses to optimize surface smoothness and proportions."
      },
      {
        phase: "Test Printing & Structure Separation",
        details: "Conducted model test printing and separated the structure due to the size limits of the 3D printing machine. I also made a small version model for the final presentation."
      },
      {
        phase: "Final Presentation",
        details: "Made product exhibition boards and renderings, and designed a complete product display method to clearly present product functions, shapes, and usage scenarios."
      }
    ]
  },
  {
    id: 3,
    title: "Re-clip\nCreating a New Chapter for Exhibitions",
    brief: "Combining exhibition design and industrial design",
    imgUrl: "https://i.meee.com.tw/4sQ7vIT.jpg",
    bannerUrl: "https://i.meee.com.tw/rFYjTho.png",
    category: "Interior Exhibition Design / Exhibition Product Design",
    date: "Currently in Competition",
    availableDate: "2026/04/15",
    team: {
      members: "Yu-Chen Lin / Hsin-Yi Yang / Yi-Hsuan Wu",
      advisors: "Wei-Chen Chang"
    },
    description: "This project, \"RE CLIP\", starts with innovative modular exhibition product facilities, proposing a display rack system that is both sustainable and flexible in response to the problems of material waste, low assembly efficiency, and lack of visual integration in traditional outdoor exhibitions. The design centers on \"reusability\", \"lightweight\", and \"magnetic structure\". It uses recycled plastics to create high-strength display panels, combined with magnetic snap fits and modular connection designs, allowing the display racks to be quickly assembled, freely spliced, and reused. This system not only effectively reduces exhibition layout costs and environmental burden but also enhances the spatial configuration flexibility and brand presentation consistency of the exhibition space, further creating a future exhibition model that combines function, aesthetics, and sustainable value.",
    designConcept: "The design concept of \"RE CLIP\" centers on \"circular exhibition\", translating sustainable thinking into concrete spatial construction language, emphasizing the design logic of material regeneration, modular reorganization, and circular usage. By recycling plastics into display panels, it not only responds to environmental issues but also makes each piece of material a medium for conveying sustainable value, redefining the possibility of exhibitions moving from disposable consumption to long-term use. The overall system is based on modularity, enabling the exhibition venue to be freely configured, dismantled, and reorganized according to needs, demonstrating high flexibility and openness.\n\nIn terms of aesthetic expression, RE CLIP adopts a low-saturation, nature-inspired color strategy, preserving the original granular texture of the recycled materials to form a stone-like texture, presenting a rustic and warm visual vocabulary. The structural language formed by geometric square units and regular splicing creates a sense of order and systematic visual impression, while generating rhythm between repetition and variation. The walls, curved surfaces, and spatial interfaces formed by modular stacking also give the exhibition venue a sense of flow and layering within a rational structure, achieving a balance of function and beauty. The overall design conveys a sustainable, stable, and futuristic brand image in a simple but not monotonous form.",
    gallery: [
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjB3aXJlZnJhbWUlMjBza2V0Y2glMjB1aXxlbnwxfHx8fDE3NzI5NTI0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1733355718906-0ac60bbbc5ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwd2ViJTIwZGFzaGJvYXJkJTIwZ2xhc3Ntb3JwaGlzbXxlbnwxfHx8fDE3NzI5NTE4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    posterUrl: "https://images.unsplash.com/photo-1712903911024-0503895511b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzZW50YXRpb24lMjBib2FyZCUyMGV4aGliaXRpb24lMjBtb2NrdXB8ZW58MXx8fHwxNzcyOTUyNDg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    challenge: "In this project, the biggest challenges were actually threefold. The first was the material issue; because we used recycled plastic, to actually make it into an exhibition stand, it had to be sturdy, durable, and safe. So we spent a lot of time testing material strength and thickness initially. The second was the modular design itself; although it is very flexible, poor design could make assembly difficult, so making it \"easy to piece together, easy to dismantle, and stable\" was a crucial key. Finally, visually, traditional display racks often look messy and lack cohesiveness. We also thought about how to create a well-designed exhibition space within the constraints of modularity.",
    solution: "To address these issues, we made several key adjustments. First, regarding the material, we reinforced the strength of the recycled plastic through structural design, allowing it to remain stable while being lightweight. Next, for the structure, we designed a magnetic snap and geometric interlocking method, so the entire stand can be pieced together intuitively, even allowing one person to complete the assembly, greatly improving efficiency. Visually, we retained the original texture of the recycled material, paired with a consistent modular language, making the whole look cleaner, more systematic, and more branded.\n\nOverall, our breakthrough was integrating \"environmental protection,\" \"usability,\" and \"aesthetics\" into one, making the display rack not just a tool, but a system that can be reused and elevate the quality of exhibitions.",
    tools: ["Sketchup for school", "Canva", "Illustrator"],
    process: [
      {
        phase: "Competition Brief",
        details: "This project was a participation in an exhibition design competition held by \"Arena Exhibition Company\". The topic focused on future exhibition forms and the possibility of sustainable layout, serving as the starting point for this design development."
      },
      {
        phase: "Research",
        details: "Starting from experiences with outdoor exhibitions and markets, we observed problems such as massive waste caused by single-use setups, as well as difficulties in transportation, tedious assembly, and visual clutter. These served as our design entry points."
      },
      {
        phase: "Ideation",
        details: "Established \"Circular Use × Modular System\" as the core direction, proposed the concept of a reusable and flexibly configured display rack, and considered the possibility of introducing recycled materials."
      },
      {
        phase: "Structure Development",
        details: "Tested different splicing methods and module sizes, ultimately developing a connection mechanism of \"magnetic snap + geometric interlocking\" to improve assembly efficiency and stability."
      },
      {
        phase: "Material & CMF",
        details: "Selected recycled plastic as the main material, retaining its natural texture and low-saturation colors, to establish a visual language that is both eco-friendly and textured."
      },
      {
        phase: "System Integration",
        details: "Integrated display panels, connectors, and auxiliary accessories (such as wheels, counterweights, etc.) to establish a complete modular system, enhancing application flexibility and scalability."
      },
      {
        phase: "Scenario Application",
        details: "Simulated different exhibition scenarios (markets, brand booths, etc.) to verify the system's feasibility in spatial configuration, traffic flow, and display effectiveness."
      },
      {
        phase: "Final Proposal",
        details: "Completed the \"RE CLIP\" modular display rack system, proposing an exhibition solution that combines sustainable materials, rapid assembly, and spatial flexibility."
      }
    ]
  },
  {
    id: 4,
    title: "Design ABC Blocks\nFrame Equilibrium",
    brief: "Aesthetic combination of geometric shapes",
    imgUrl: "https://i.meee.com.tw/rx8b228.jpg",
    bannerUrl: "https://i.meee.com.tw/sSLYfeV.png",
    category: "3D Visual Art",
    date: "2024.12",
    description: "This project is based on the combination of three elements A, B, and C to create a three-dimensional composition. Element C is set as a unique element, forming a visual focus in the overall shape. Through the combination of geometric shapes and structural arrangements, the design process explores the proportions, balance, and spatial relationships between the elements. It finally completes a 3D model that integrates the interactive relationships of the three elements.",
    designConcept: "In terms of shape, I used geometric cutting and 3D crossing design to make the overall shape simple but layered. Through simple lines and symmetrical structures, the work visually presents a stable and balanced effect. It has both an industrial style and artistic feel, forming an interesting 3D shape.",
    gallery: [
      "https://i.meee.com.tw/bmAOOod.jpg",
      "https://i.meee.com.tw/352FT22.jpg",
      "https://i.meee.com.tw/tQpyT8b.jpg",
      "https://i.meee.com.tw/MKw3aBc.jpg",
    ],
    posterUrl: "https://i.meee.com.tw/FgfETWF.png",
    challenge: "The challenge of this project was how to maintain the balance of the overall shape while combining the three elements A, B, and C, and let element C clearly become the visual focus. In addition, during the 3D composition process, I had to constantly adjust the proportions and spatial relationships to make the overall structure stable and layered. In the model-making stage, since it was my first time using ABS boards and putty, I also needed to learn how to process materials and finish surfaces.",
    solution: "By repeatedly adjusting shape proportions and structural arrangements, I gradually established a balanced relationship between the three elements, making element C clearly appear as the visual focus. In model making, through actual attempts at cutting ABS boards, assembling, and using putty, and after multiple times of sanding and adjusting details, I gradually mastered material processing and surface treatment skills, finally completing the whole model.",
    tools: ["Illustrator", "Canva", "ABS Board"],
    process: [
      {
        phase: "Concept Ideation",
        details: "Understood the task requirements, decided to use elements A, B, and C for 3D shape design, and set C as the unique element."
      },
      {
        phase: "Sketch Development",
        details: "First drew various shape sketches that matched the design concept, explored different ways of combining elements, and made foam mock-ups to test the 3D composition and proportions."
      },
      {
        phase: "Shape Confirmation",
        details: "Through comparison and adjustment, I confirmed the final shape direction and the arrangement relationship between the three elements."
      },
      {
        phase: "Model Making",
        details: "Used ABS boards for cutting and assembly to build the basic structure of the model."
      },
      {
        phase: "Rendering & Exhibition Board",
        details: "After completing the model, I made 3D renderings and designed an exhibition board to summarize the design process and final results."
      }
    ],
    reflection: "In this 3D shape design project, I needed to use elements A, B, and C to develop the overall shape. I kept adjusting the proportions and positions of the elements to see which combination looked best. Through sketching and making foam mock-ups, I gradually understood the spatial relationships of 3D shapes.\n\nWhen making the model, it was my first time using ABS boards and putty. At first, I wasn't used to putty and often applied it unevenly, or the surface still wasn't flat after sanding. So I had to keep applying putty, sanding, and fixing it. I was a bit impatient at first, but later I realized I had to take it step by step, otherwise it would take even more time.\n\nIt was also my first time spraying model paint. Because I had no experience, I didn't control the distance and amount of paint well. As a result, I sprayed too much and the surface got 'runny nose' drips. In the end, I had to sand it again and respray it. Although I felt a bit frustrated, I learned that spray painting really needs to be done slowly, layer by thin layer.\n\nThis was also my first time staying up all night until morning for a project. When I saw the work finally completed in the morning, I was really happy. That feeling is hard to describe, but it made me feel that all the hard work before was worth it."
  },
  {
    id: 5,
    title: "New Life in Fertile Soil\nBiodegradable Shell",
    brief: "Combining creative innovation with environmental protection",
    imgUrl: "https://i.meee.com.tw/s5DJLBh.png",
    bannerUrl: "https://i.meee.com.tw/Eow1rtw.png",
    coverPosition: "60% 50%",
    category: "Innovation and Entrepreneurship Design",
    date: "2025.05",
    team: {
      members: "Yu-Chen Lin / Hui-Ju Yang / Yu-Hsuan Liu",
      advisors: "Shu-Ping Yu"
    },
    description: "'New Life in Fertile Soil' is a biodegradable plant shell design aiming to reduce the environmental burden caused by single-use plastic flower pots in the gardening industry. Using naturally biodegradable materials, the plant can return to the soil along with the container during transplantation, forming an eco-friendlier cultivation method. This project starts from the product life cycle to explore the possibilities between design and natural cycles.",
    designConcept: "The design of 'New Life in Fertile Soil' takes natural cycles as its core concept, treating the product as a part of the ecosystem rather than an independent object. The design language is based on natural and organic forms. Through simple and soft outlines, the shell looks closer to soil and plant growth states visually, creating a feeling of blending with the natural environment.\n\nIn terms of materials and structures, the product uses biodegradable materials so the container can gradually return to the land during plant growth and transplantation, forming a complete life cycle. Through this design thinking, the container is no longer just a temporary tool to hold plants but a part of the plant's life cycle, showing the possibility of product design coexisting with nature.",
    gallery: [
      "https://i.meee.com.tw/enezLkL.jpg",
      "https://i.meee.com.tw/ZtGI8OQ.jpg"
    ],
    challenge: "During the design process of this project, our main challenge was how to find a balance between environmental protection concepts and actual usage needs. Although biodegradable materials can reduce environmental burden, they still need to have a certain structural strength and stability during plant cultivation and transportation. In addition, this project was a cross-school and cross-department collaboration with Ming Chi University of Technology. Team members came from different backgrounds, so we needed to spend time communicating and coordinating when discussing and integrating our ideas.",
    solution: "Through multiple discussions and reading related papers, we gradually found a balance in material selection and structural design, allowing the product to maintain basic stability during use while still returning to the soil after planting. Fortunately, our partners included students from the Electronic Engineering Department at Ming Chi University of Technology, who had contact with research in the Plasma and Thin Film Technology Center. This brought different professional perspectives to our material and technical discussions. Through cross-disciplinary communication, the design was not just a concept but was thought about more comprehensively from the perspectives of material application and technology, bringing new breakthroughs to the project.",
    tools: ["Canva", "Sketchup for school", "Adobe Illustrator"],
    process: [
      {
        phase: "Brand Positioning",
        details: "Clarified the core brand value of 'Purity, Focus, and Minimalism'."
      },
      {
        phase: "Structure & Modeling",
        details: "Designed a glue-less folding structure, which is environmentally friendly and lowers packaging costs."
      },
      {
        phase: "Visual Layout",
        details: "Tested font sizes and reading comfort through multiple print proofs to confirm the final print draft."
      }
    ],
    reflection: "The starting point of this project actually came from a very daily observation. During a design thinking class, I saw many discarded black plastic pots on campus, which made me start thinking: where do these things go after they are used? This led to the development of the \"decomposable pot shell\" idea, hoping that after the product's life ends, it won't become trash, but can return to the soil and become part of the natural cycle.\n\nAt first, our team had many people, but everyone had different ideas, and we were somewhat doing our own things. In the middle, I actually acted more like the person responsible for converging everyone's direction, constantly making trade-offs between \"creative\" and \"doable\". Later, as the project progressed, some members gradually withdrew, and in the end, only three of us continued to do it. Although there was more work to do, it actually made our decision-making faster, our direction more consistent, and allowed us to focus more on developing this concept.\n\nIn the later stages, I was mainly responsible for organizing the overall content, from design logic and product settings to presentation visuals. Piecing together a bunch of scattered ideas into a complete project was actually quite stressful, but it also made me clearly realize that design is not just about brainstorming, but also includes the ability to organize, communicate, and truly land ideas into reality.\n\nThis experience is very important to me, and it was also my first time completing a product with members from different fields. Everyone brought their own strengths to the table, which also taught me how to find a balance among different perspectives. At the same time, it made me rethink that design is not just about making a good-looking object, but whether it can truly respond to problems and even have the opportunity to be realized."
  },
  {
    id: 6,
    title: "Eject\nSeasoning Jar Storage Module",
    brief: "Kitchen Furniture Product Design",
    imgUrl: "https://i.meee.com.tw/bq3qptl.png",
    bannerUrl: "https://i.meee.com.tw/Aq7RuVG.png",
    coverPosition: "50% 15%",
    category: "Kitchen Furniture Product Design",
    date: "2025.10",
    description: "Aiming to be 'more intuitive, cleaner, and safer', this project designed a modular, detachable push-to-open seasoning jar storage system. It allows users to reduce picking time while cooking, keeping their eyes on the pan and the counter clean. The top cover and bottle body use S / P / C letters and a color system for quick recognition of different seasonings from a top view. The pop-up mechanism provides clean ejection and stable storage actions, solving the pain points of traditional seasoning jars which are easy to knock over, slow to recognize, and hard to control amounts.",
    designConcept: "The design concept of this product comes from 'making daily operations more intuitive'. During cooking, users often need to grab seasonings quickly, so the design centers on intuitive recognition, clean operation, and neat desktops to create a desktop seasoning jar storage module that is both functional and beautiful. With a push-to-eject mechanism, users only need to press with one hand to pop up the seasoning jar. After use, they press it back to store it, making the operation smoother and keeping the desktop neat and orderly.\n\nAesthetically, the overall appearance uses simple and clean geometric shapes to echo modern kitchen styles. The bottle uses semi-transparent materials so users can faintly see the contents while keeping the overall visual clean. The top cover presents a metallic texture, matched with different colors and letters to form a clear recognition system, so users can quickly find the seasoning they need while cooking.\n\nIn addition, the product establishes a unified design language through the integration of colors, materials, and proportions. The dark outer shell provides a stable visual foundation, while the brightly colored bottle caps become the visual focus, not only improving recognition but also giving the product a modern and refined style in the kitchen space. The overall design strikes a balance between function and aesthetics, making the seasoning jar not only a practical tool but also a design element on the desktop.",
    gallery: [
      "https://i.meee.com.tw/ECFQGXL.jpg",
      "https://i.meee.com.tw/N6GgL5U.jpg",
    ],
    posterUrl: [
      "https://i.meee.com.tw/a43VCXu.jpg",
      "https://i.meee.com.tw/rS1lz6r.jpg"
    ],
    team: {
      members: "Independent Project",
      advisors: "Chen-Shan Lin"
    },
    challenge: "The biggest challenges in this project were mainly in two areas: one was the design of the pop-up mechanism, and the other was the modeling of the threads on the bottle cap and bottle body. The pop-up mechanism needs to pop out smoothly when pressed, but also stay stable without getting stuck or skewed. At first, the prototypes often failed to pop up smoothly or couldn't be pressed back. In addition, the spiral threads of the bottle cap and bottle body were also very hard to handle, because the 3D printer used had limited precision. If the tolerance wasn't right, the cap would either not screw in or be too loose, making it hard to fit perfectly.",
    solution: "To solve these problems, I spent a lot of time repeatedly modeling and test printing. For the pop-up mechanism, I actually went to a material store to buy parts for testing, trying different structural methods while gradually finding a smoother, more stable pop-up effect. For the threads, I kept adjusting the thread pitch and gap, testing how the cap and bottle fit after every print. During the process, I also asked my teacher for advice on printing precision and structural design. After many attempts and modifications, I finally succeeded in making a version that could be smoothly screwed together and had good tightness. This process of repeated testing and adjustment also gradually made the whole work more complete.",
    tools: ["PTC Creo", "3D Print", "Adobe Illustrator"],
    process: [
      {
        phase: "Concept Ideation",
        details: "Starting from daily cooking scenarios, I observed that seasoning jars easily get messy on the desktop and are inconvenient to grab. So I came up with this 'press to pop up, press to store after use' seasoning jar storage module, hoping to make the desktop neater and operations more intuitive."
      },
      {
        phase: "Sketch Development",
        details: "Through a lot of sketches, I explored different appearance proportions and structural methods, while thinking about the operating flow when the seasoning jar is stored and used, gradually establishing the overall shape and basic design direction."
      },
      {
        phase: "3D Modeling & Mechanism Design",
        details: "Built the confirmed design direction into a 3D model, started designing the internal pop-up mechanism and bottle body structure, and planned the thread structure of the bottle cap and bottle body so the seasoning jar can smoothly unscrew and stay tight."
      },
      {
        phase: "Test Printing & Structure Adjustment",
        details: "After completing the modeling, I did multiple 3D printing tests to observe the operation of the pop-up mechanism and the fit of the bottle cap threads, continuously modifying model parameters and structural details based on the printing results."
      },
      {
        phase: "Final Integration & Presentation",
        details: "After the mechanism and structure gradually stabilized, I completed the overall appearance and parts integration, and made the final model and exhibition results."
      }
    ],
    reflection: "In this project, I gradually realized that turning an idea into reality is not as simple as imagined. Many designs that look feasible on the computer will only reveal details that need adjusting after being actually printed out, such as whether the mechanism is smooth and whether the parts can really be assembled together. These all require slow correction through test after test.\n\nIn the past, I might have insisted that all mechanisms and parts in the products I designed should be completed by myself. But during this project, I gradually understood that many fields actually have their own expertise. For example, mechanism design looks like just a combination of a few parts, but to really make it smooth, durable, and easy to assemble, it actually requires a lot of engineering experience accumulation.\n\nTherefore, during the later adjustment period, I started trying to use existing mechanism parts, and then matched them with my own appearance and structural design to integrate them. This also made me realize that design doesn't necessarily mean doing everything yourself, but knowing how to integrate different expertise and resources so the product can ultimately be better realized. This project was not just about completing a work, but also made me better understand the relationship between design and engineering."
  },
  {
    id: 7,
    title: "Social Design\nChiayi Old Theater Guide Booklet",
    brief: "Integrating design with placemaking and visual communication",
    imgUrl: "https://i.meee.com.tw/GxjUww6.png",
    category: "Social Design / Visual Art Design",
    date: "2024.12",
    bannerUrl: "https://i.meee.com.tw/RWNAe5x.png",
    description: "This project takes 'Chiayi City's Old Theater Culture' as its theme. Through data collection, historical organization, and visual design, it reorganizes the development context of Chiayi City's past theater culture. Theaters were once important entertainment and cultural exchange venues in the city, carrying the life memories and emotional connections of different generations. However, with the changing times and the shifting film and television industry, many old theaters have gradually closed down or disappeared, and related city memories are fading away.\n\nThis design uses a book as the main medium. Through old theater maps, theater history introductions, and timeline arrangements, the scattered cultural memories in the city are pieced back together, allowing readers to have a more complete understanding of the development and changes of Chiayi's theater culture. By recording local history and cultural assets through design, it awakens the public's attention to city memories and cultural preservation, and further considers the possibility of activating and reusing old theater spaces in the future.",
    designConcept: "This design uses 'retro movie culture' as the main visual style, utilizing collage design techniques, combining old photos, old newspaper textures, movie film, and theater-related elements to present a visual language with a historical atmosphere. Through the collage and reorganization of different image materials, it symbolizes the scattered pieces of city memories being reorganized and connected, giving the whole picture a nostalgic and story-telling feel.\n\nIn terms of color usage, yellowed paper and warm tones are used as the base, simulating the texture of old posters and historical documents, strengthening the sense of age and traces of time. The page layout creates a visual effect of overlapping time, space, and memories through layered stacking and irregular arrangements, making readers feel like they are stepping into a time journey about Chiayi's old theaters when reading.",
    gallery: [],
    posterUrl: "https://online.visual-paradigm.com/share/book/-compressed-1--2hzddn3r74",
    team: {
      members: "Individual Independent Project",
    },
    challenge: "During the research and design process of this project, the biggest challenge was that the materials related to Chiayi's old theaters were quite scattered. Many theaters had closed or been demolished, and available images and historical records were relatively limited. Therefore, I needed to collect, organize, and compare information through different sources. I also conducted on-site field visits to multiple former theater sites and surrounding environments to better understand their historical backgrounds and city contexts. In addition, on the design level, I also needed to think about how to transform historical text data into clear and attractive visual presentations, striking a balance between information communication and layout aesthetics, so readers could more easily understand the development context of Chiayi's theater culture.",
    solution: "Through the research and design of this project, I reorganized the originally scattered data of Chiayi's old theaters, and combined it with timelines, maps, and theater stories to build a more complete cultural context. At the same time, I used a retro collage style in visual design, integrating old photos, historical materials, and movie elements, transforming the originally static historical content into a design presentation with storytelling and visual appeal. Through design, not only is the history of Chiayi's old theaters seen again, but I also hope to awaken more people's attention to local culture and city memories.",
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Canva AI"],
    process: [
      {
        phase: "Theme Ideation & Data Collection",
        details: "Established 'Chiayi City's Old Theater Culture' as the research theme. Collected historical data through books, online resources, and local literature to gain an initial understanding of the development background and era context of Chiayi's theaters."
      },
      {
        phase: "Field Visits & Data Organization",
        details: "Actually visited the old sites and surrounding environments of multiple old theaters in Chiayi City, recorded the spaces and local traces on-site, and organized the collected historical data to build a theater timeline and distribution map."
      },
      {
        phase: "Visual Style Development",
        details: "Established retro movie culture as the main design direction. Tried to use collage design, old photos, and old newspaper textures to develop the overall visual style and page layout."
      },
      {
        phase: "Page Layout & Content Editing",
        details: "Edited the content according to the historical development order of the theaters. Designed the book layout, maps, and timelines, integrating text data and image materials into complete visual content."
      },
      {
        phase: "Final Design Completion & Presentation",
        details: "Completed the overall design and layout of the book. Presented the historical culture of Chiayi's old theaters through design, allowing readers to rediscover the theater memories that once existed in the city."
      }
    ],
    reflection: "In this project, through data collection, field visits, and design organization, I gained a new understanding of Chiayi City's past old theater culture. Originally, I was just curious about old theaters, but during the research process, I found that theaters were once very important entertainment and social venues in the city, carrying many people's life memories. With the changing times, many theaters have disappeared or been replaced by other buildings, which also made me start thinking about the importance of preserving local culture and city memories.\n\nDuring the design process, I tried to transform the collected historical data into visual content that is easier to read and understand. Through collage and retro style design, I presented the era atmosphere brought by old theaters. Although I spent a lot of time organizing data and designing layouts, I also learned how to combine research content with design expression. Through this project, I not only completed a design work about Chiayi's old theaters but also better understood the value of design in recording and passing down cultural memories."
  },
  {
    id: 8,
    title: "Movie Screening\nUntold Herstory",
    brief: "Using design to combine movies and history",
    imgUrl: "https://i.meee.com.tw/0AToeLg.png",
    bannerUrl: "https://i.meee.com.tw/QRWfDAz.png",
    coverPosition: "50% 10%",
    category: "Graphic Promotional Design",
    date: "2023.11",
    description: "This project is the promotional design for a movie screening event co-organized by Concordia Middle School and the Dr. Chen Wen-Chen Memorial Foundation. The event focuses on the movie 'Untold Herstory'. Through the combination of images and history, it guides students and audiences to rethink Taiwan's past historical memories and social issues.\n\nIn this event, I was responsible for the overall visual promotional design, including the main visual poster, event infographics, speaker introduction cards, and related promotional materials. The design uses historical atmosphere as the main visual direction. Through low-saturation tones and emotionally tense pictures, it creates a quiet and historical visual style, so viewers can also feel the era background and meaning conveyed by the movie when they see the promotional information.\n\nThrough a series of visual designs, the event information can be clearly conveyed while improving the overall recognition and attractiveness of the event, making more students and audiences willing to participate in this movie screening and post-screening discussion event.",
    designConcept: "The design concept of this project is based on 'understand first, then design'. Before actually starting the design, I first took time to deeply understand the movie's story and historical background, because I believe that if I don't understand the context of the whole event, I can't create pictures that resonate with people.\n\nIn visual performance, I chose low-saturation tones as the main axis, matched with grayish blue, dark green, and earth colors, to create a picture with a sense of age and an oppressive atmosphere, making the whole look closer to the texture of historical memory. At the same time, through the use of movie stills, the picture has a sense of reality and story. Combined with image processing and tracing effects, the picture presents a slightly hazy and symbolic visual style.\n\nIn addition, calligraphy fonts with a brushstroke feel are used as titles in the typography to strengthen the historical sense and emotional tension. Through a clear information hierarchy, viewers can find a balance between emotion and information.",
    gallery: [
      "https://i.meee.com.tw/9fg8Nj1.png",
      "https://i.meee.com.tw/gtWtgM2.png",
      "https://images.unsplash.com/photo-1611664778424-c8f83f5f932a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwY2FtZXJhJTIwcmV0cm98ZW58MXx8fHwxNzczNzIxNDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1634771141792-12c6a8df9103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlciUyMG1vY2t1cCUyMGRhcmt8ZW58MXx8fHwxNzczNzIxNDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    posterUrl: [
      "https://i.meee.com.tw/vy3E8fX.png",
      "https://i.meee.com.tw/aNqtttC.png",
      "https://i.meee.com.tw/DFoeDQH.png",
      "https://i.meee.com.tw/NmTIAlV.png"
    ],
    challenge: "The biggest challenge of this project came from the fact that the event itself involved political and historical issues. During the design process, the originally completed design could not be stamped or named by the school because the school was conservative about the content. As a result, the original design had to be readjusted, and at one point, we faced a situation where we couldn't continue using existing materials.\n\nThis unexpected situation not only affected the design direction but also affected the overall project progress. It made me deeply realize that design is not just a visual presentation, but is also restricted by real conditions and different standpoints.",
    solution: "Facing this situation, I changed my original approach and turned to seek support from the Dr. Chen Wen-Chen Memorial Foundation. The foundation provided certification and relevant information, so the event could still have credibility and be smoothly promoted without the school's stamp.\n\nThrough this experience, I learned that when facing restrictions, you need to quickly adjust your strategy and solve problems through communication and cooperation between different units. This also made me better understand that design is not just creation, but also a process of integrating resources and solving problems.",
    pdfEmbed: "https://drive.google.com/file/d/1xV1J00ChX4xEKL08tQ9LmYFErhCwjd59/view?usp=sharing",
    tools: ["Adobe Photoshop", "Adobe Illustrator", "PTC Creo"],
    process: [
      {
        phase: "Understanding the Theme & Collecting Data",
        details: "Before formal design, I took time to research the historical background and story of the movie 'Untold Herstory'. Through online data and image collection, I built an understanding of the overall issue."
      },
      {
        phase: "Image Selection & Concept Ideation",
        details: "Selected the most representative pictures from numerous materials, choosing images that could simultaneously present historical imagery and emotional atmosphere as the core elements of the main visual."
      },
      {
        phase: "Main Visual Design & Image Processing",
        details: "Used Photoshop to remove characters' backgrounds and composite scenes. Added elements like 'Green Island', water ripples, and flames to symbolize the historical site and era background. Then used Illustrator for image tracing to give the picture a hazy and consistent style."
      },
      {
        phase: "Layout & Information Editing",
        details: "Added the event title and related information. Arranged the text hierarchy according to importance to ensure the main visual and information did not interfere with each other, while improving reading clarity."
      },
      {
        phase: "Version Adjustment & Communication",
        details: "Made multiple layout versions, repeatedly discussed and modified with the organizer, adjusted details according to needs, and finally confirmed the official version."
      },
      {
        phase: "Extended Application Design",
        details: "Extended the main visual to event flowcharts, speaker cards, postcards, and surrounding designs, establishing a complete event visual system, so the overall promotion had consistency and recognition."
      }
    ],
    reflection: "In this project, I found that design is not just about making pictures look good, but you need to first understand what the event is doing and what message it wants to convey behind it. Because 'Untold Herstory' itself is related to historical issues, I didn't rush to design at the beginning, but took time to understand the whole story background, so I could be closer to the content when designing, instead of just doing superficial visuals.\n\nDuring the process, I also encountered some difficulties. For example, after the design was completed, because the event involved political and historical issues, the school was unwilling to stamp the promotional materials, which meant the original design needed to be readjusted. I felt quite frustrated at the time because it meant my previous efforts had to be redone. But later, with the assistance of the foundation, the event could still proceed smoothly, which also taught me that design is not just about pictures, but requires communicating with different units and solving problems together.\n\nAlso, the budget for this event was relatively limited, so in the design, I would think about how to achieve good results with fewer resources, such as using the same main visual to extend different promotional materials, so the overall style could be unified and more efficient.\nThrough this experience, I learned a lot. It was not just technical growth, but also made me better understand the role of design in events and issues. If there are similar projects in the future, I hope I can make the overall planning more complete and make the design more impactful."
  },
  {
    id: 9,
    title: "VerdiRail\nRotary Balcony Railing Planter Module",
    brief: "Rotary Balcony Railing Planter Module",
    pdfEmbed: "https://drive.google.com/file/d/1PBoXqol1TXW4JXKlDPzlGIKO_KLWI1Jv/view?usp=sharing",
    imgUrl: "https://i.meee.com.tw/DSBjZwk.jpg",
    bannerUrl: "https://i.meee.com.tw/M7Tnb70.png",
    category: "SDGs Issue Exploration Design",
    date: "2024.12",
    description: "Set against the backdrop of the SDGs (Sustainable Development Goals), this project starts with the problem of balcony greening in urban living environments, exploring the limitations of traditional potted plants in terms of space utilization, environmental adaptation, and overall visual effect. Observations show that most families in Taiwan have the habit of growing plants, but the common placement method is mostly horizontal stacking, which not only takes up space but also makes it difficult to form a cohesive greening effect. Under strong winds or heavy rain, they are even prone to tipping over, creating safety concerns.\n\nTherefore, this design proposes 'VerdiRail | Rotary Facade Greening Module'. By integrating plants into the balcony railing and introducing a rotary mechanism that can flip inside and out, it allows users to find a balance between daily maintenance and exterior display. At the same time, combining vertical hanging with a modular design, it transforms originally scattered potted plants into a systematic facade greening device. The overall design not only improves space utilization efficiency and convenience of use, but also attempts to extend personal greening behavior to the building facade, responding to SDGs-related issues such as sustainable cities, healthy living, and environmental improvement.",
    designConcept: "This design centers on 'facade greening' and 'dynamic transformation', transforming originally scattered and space-consuming potted plants into a greening system that can be integrated into buildings. Through vertical arrangement and modular design, plants are no longer just objects placed in a space, but directly become part of the building facade, making the overall visual more orderly and consistent.\n\nIn terms of styling, it adopts a 3/4 sphere design language, paired with rounded curved surfaces and an enveloping structure, making the whole look stable and clean, while also preserving the open feeling for plants to grow naturally. The overall design sits between a 'container' and an 'architectural component', weakening the presence of traditional potted plants and making it look more like part of the building.\n\nMechanically, a 360-degree rotation design is incorporated, allowing the plants to switch between the inside and outside. Usually, they can be turned inward for convenient watering and maintenance, and retracted inward during strong winds or typhoons to enhance protection. When display is needed, they can be turned outward to form a complete facade greening effect. This design not only improves the convenience of use but also increases interaction with the space.\n\nOverall, this design emphasizes the integration of function, structure, and visuals. Through a simple and modular approach, the system can be freely extended according to different balcony conditions, further forming an urban greening interface with rhythm and wholeness.",
    gallery: [
      "https://i.meee.com.tw/HE8aZMn.png",
      "https://i.meee.com.tw/T9VegYo.png",
    ],
    challenge: "The biggest challenge of this project lies in its practical application. Compared to general household products, this design needs to integrate with balcony railings or even the building's exterior, which is a semi-architectural scale design. However, most users already have established habits for using their balconies and might have concerns about making structural changes. This makes it difficult to promote the product through normal consumer behavior.\n\nFurthermore, in terms of design, balancing space utilization, ease of operation, and structural safety is also an important issue. Especially when integrating the rotary mechanism with the hanging structure, it is necessary to find a balance between stability and smooth usage, avoiding any negative impact on the user experience or causing safety concerns.",
    solution: "Facing these limitations, I no longer treated it as a simple product in my design, but rather thought of it as a \"part of the building.\" Therefore, I proposed a direction to collaborate with builders or architectural designers, allowing this greening system to be included at the beginning of the building's planning. This reduces the difficulty and burden for users to modify it themselves later.\n\nAt the same time, by adding a rotary mechanism, I allowed the plants to freely switch between the inside and outside, balancing the needs for daily watering and exterior display. This allows users to use it without changing their original living habits. Coupled with a modular design, the system can be extended and arranged according to different balcony conditions, developing from a single device into an overall facade greening effect.\n\nOverall, the breakthrough of this design is not just solving functional or spatial problems, but transforming a potted plant from a single object into a greening system that can blend into the building and urban environment.",
    tools: ["Adobe Illustrator", "Canva"],
    process: [
      {
        phase: "Problem Discovery",
        details: "From daily observations, I found that most balcony plants are placed on the ground. This not only takes up space but also lacks a cohesive look. Furthermore, they are prone to tipping over and causing cleaning troubles in windy and rainy environments."
      },
      {
        phase: "Concept Development",
        details: "With \"vertical integration\" as the core, I combined the plants with the balcony railing. Through modeling and form design, I developed a 3/4 sphere shape. This strikes a balance between being enclosed and open, while strengthening the integration of the overall appearance with the building facade."
      },
      {
        phase: "Mechanism and System Design",
        details: "I introduced a rotary mechanism, allowing the plants to switch between the inside and outside, balancing daily maintenance and exterior display. Combined with a modular design, the system can be extended and arranged according to different balcony conditions."
      },
      {
        phase: "Integration and Application",
        details: "I integrated structural safety and environmental factors (such as wind and rain resistance, supplemental lighting, etc.), elevating the design from a single product to a facade greening system. This strengthens its application potential in actual buildings."
      }
    ],
    reflection: "In this project, I gradually realized that design is not just about making things look good, but truly responding to usage scenarios and practical problems. At first, I focused more on the shape of the potted plant, but later I found that what's more important than appearance is its position in space and how it relates to the building. This made me shift from 'designing a product' to 'thinking about a system'.\n\nDuring the process, I also realized that if a design is to be truly used, besides function and appearance, usage habits and promotion methods are actually very important. For instance, this design needs to be integrated with balconies or even buildings. If there's no cooperation with builders or designers, it's actually very difficult for general users to change their original space by themselves. This made me start thinking about how design can be truly introduced into life. Moreover, during the design process, I was always making trade-offs between function and appearance. Too many functions make the shape complicated, but pursuing only appearance affects usability. This taught me that design is actually a process of continuous adjustment.\n\nIt's a pity that this project is currently still in the proposal stage and hasn't been truly made or applied in a real environment yet. However, because of this, I feel more clearly the distance between a design concept and its realization, and have started to think about how to make this type of design more likely to be realized in the future."
  }
];

export const competitionDataEn: ExperienceType[] = [
  {
    id: 1,
    year: "December 2025",
    title: "Chang Gung University Industrial Design 23rd Final Exhibition",
    subtitle: "Winner (Both exhibited works won awards)",
    description: "Participated in the final exhibition of the Industrial Design Department of Chang Gung University, exhibiting the works 'Eject Seasoning Jar Storage Module' and 'Channel - Visually Impaired Open Water Swimming Guide System'. Both works were highly recognized by the judges and both won the winner award.\n\n'Eject Seasoning Jar Storage Module' starts from daily kitchen storage, rethinking how to access seasoning jars. Through an intuitive 'pop-up' operation mechanism, it improves usability and overall space neatness and efficiency.\n\n'Channel' focuses on the direction recognition and safety issues faced by visually impaired people swimming in open water. Through the design of a guiding system, it helps users build stable heading perception, reduces risks, and improves their fairness and autonomy in participating in water activities.",
    image: "https://i.meee.com.tw/nOGAc0i.png",
    extraImages: [
      "https://i.meee.com.tw/aIHnQA1.jpg",
    ],
    projectId: 6,
    extraProjectIds: [2],
    certificates: [
      "https://i.meee.com.tw/ALkYcri.jpg",
      "https://i.meee.com.tw/zkXQBL5.jpg"
    ],
  },
  {
    id: 2,
    year: "October 2025",
    title: "TSTA 2025 Sports Technology Innovation Design Competition",
    subtitle: "Gold Award / Innovative Tech Award / Excellence Award",
    description: "In the TSTA 2025 Sports Technology Innovation Design Competition, my proposal work 'Channel - Visually Impaired Open Water Swimming Guide System' won the 'Gold Award', 'Innovative Tech Award', and 'Excellence Award'.\n\nThis proposal focuses on the direction recognition and safety issues faced by visually impaired people in open water activities. Through systematic design thinking, it proposes a heading guidance solution with development potential as the design basis for future productization.\n\nDuring the design process, through user scenario analysis and needs translation, the concept of 'fair participation' was materialized into a practical design direction, demonstrating the integration ability from problem insight to system construction.\n\nWinning multiple awards this time not only verifies the innovativeness of the proposal but also highlights its possibility for future productization and practical application.",
    image: "https://i.meee.com.tw/TZ9xXJU.png",
    projectId: 2,
    extraImages: [
      "https://i.meee.com.tw/zs8Tdwz.jpg",
    ],
    certificates: [
      "https://i.meee.com.tw/PUrdVEX.jpg",
      "https://i.meee.com.tw/FzFsL1u.jpg",
      "https://i.meee.com.tw/VpBduZe.jpg"
    ]
  },
  {
    id: 3,
    year: "June 2025",
    title: "Chang Gung University Industrial Design 22nd Final Exhibition",
    subtitle: "Winner",
    description: "Exhibited the work 'Frame Equilibrium' at the final exhibition and won the winner award.\n\nThis work is based on the concept of the relationship between realistic frameworks and the state of self. Through the interaction between spheres and structures, it expresses the process of people finding balance between limitations and pursuits.\n\nIn terms of styling, it uses geometric cutting and 3D crossing, combined with proportions and center of gravity arrangements, to create a stable yet tense visual effect, showing basic styling and spatial composition skills.",
    image: "https://i.meee.com.tw/kPo7sHV.png",
    projectId: 4,
    certificate: "https://i.meee.com.tw/EcU50IM.jpg",
  },
  {
    id: 4,
    year: "May 2025",
    title: "Chang Gung University [2025 Young Boss] Innovation and Entrepreneurship Competition",
    subtitle: "Finals - Sustainable Innovation Group 3rd Place",
    description: "On the existing basis, further introduced product technology and manufacturing thinking, integrated material applications, structural design, and production feasibility. Combined with business models and marketing strategies, it developed into an entrepreneurial proposal with implementation potential, and finally won third place in the finals.\n\nThis stage emphasized the integration of 'Design × Technology × Business', moving further from concept to a practical product system.",
    image: "https://i.meee.com.tw/cOVvkSJ.png",
    projectId: 5,
    certificate: "https://i.meee.com.tw/jLJf7ta.jpg",
  },
  {
    id: 5,
    year: "April 2025",
    title: "College Cross-school Innovation and Entrepreneurship Competition 'GoGreen2025'",
    subtitle: "Finals 4th Place",
    description: "Continuing the same design concept, further introduced cost structures, target audiences, and market positioning, developing it into an innovative proposal with a preliminary business model, and successfully advanced to the finals, winning fourth place.\n\nThis stage shifted from conceptual design to feasibility assessment, starting to verify the product's establishment conditions in the market and business.",
    image: "https://i.meee.com.tw/cOVvkSJ.png",
    projectId: 5,
    certificate: "https://i.meee.com.tw/7mMe41u.jpg",
  },
  {
    id: 6,
    year: "March 2025",
    title: "Ming Chi University Cross-school Design Thinking Interdisciplinary Competition",
    subtitle: "Finals Group Honorable Mention",
    description: "Centered on 'biodegradable planting containers and circular system design', proposed a preliminary concept proposal, used design thinking methods to respond to cross-disciplinary problems, and received an honorable mention in the finals.\n\nThis stage focused on problem insight and concept establishment, focusing on the imagination of materials and the possibilities of sustainable applications, serving as the starting point for subsequent design development.",
    image: "https://i.meee.com.tw/EVNc1Ql.jpg",
    certificate: "https://i.meee.com.tw/j7jgRCx.jpg",
  },
  {
    id: 9,
    year: "November 2022",
    title: "Concordia Middle School Sports Meet Poster Design Competition",
    subtitle: "Honorable Mention",
    description: "In the sports meet poster design competition, created visual design with the work 'CMSH Sports Meet', integrating sports event elements into the word 'CMSH'. Through the combination of typography and imagery, it strengthened theme recognition and visual interest, ultimately winning an honorable mention.\n\nDuring the design process, focused on color configuration, composition layout, and visual rhythm establishment. Used dynamic postures and scene arrangements to present the vitality of sports and the competitive atmosphere, demonstrating basic graphic design skills and creative potential.",
    image: "https://i.meee.com.tw/d9TjyTu.png",
    imageAspect: "aspect-[210/297]",
    certificate: "https://i.meee.com.tw/m92cDab.png",
  }
];

export const projectDataEn: ExperienceType[] = [
  {
    id: 14,
    year: "June 2025 - Present",
    title: "Chang Gung University Library Audio-Visual Center",
    subtitle: "Multimedia & Visual Design Assistant",
    description: "Responsible for library promotional poster design, website page creation and content updating, and the visual planning of the signage and labeling system.\n\nAlso participated in multimedia content production (such as 360-degree panoramic tours), helping to optimize information presentation methods and user experience, improving the overall consistency and readability of digital content in the library.",
    image: "https://i.meee.com.tw/JiRbZDV.jpg",
    extraImages: [
      "https://i.meee.com.tw/XmUQ4Yy.jpg"
    ],
    link: "/more-works#m1",
  },
  {
    id: 10,
    year: "January 2022",
    title: "'Untold Herstory' History & Movie Screening",
    subtitle: "Event Coordinator & Visual Designer",
    description: "This project was the promotional design for a movie screening event co-organized by Concordia Middle School and the Dr. Chen Wen-Chen Memorial Foundation. Centered on the movie 'Untold Herstory', it used the combination of images and history to guide students and audiences to rethink Taiwan's past historical memories and social issues.\n\nI was responsible for the overall visual promotional design, including the main visual poster, infographics, speaker cards, and related materials. The design used a historical atmosphere as its visual direction. With low-saturation tones and emotionally tense images, it created a quiet, historical visual style.\n\nThrough a series of visual designs, the event information was clearly conveyed while increasing overall recognition and attractiveness.",
    image: "https://i.meee.com.tw/9WFNTFV.png",
    projectId: 8,
    extraImages: [
      "https://i.meee.com.tw/M5dZwyZ.png",
      "https://i.meee.com.tw/NfV51jP.png"
    ],
    link: "https://drive.google.com/file/d/1xV1J00ChX4xEKL08tQ9LmYFErhCwjd59/view?usp=sharing",
    certificate: "https://i.meee.com.tw/PDtRyHc.jpg",
    certificateText: "View Certificate"
  },
  {
    id: 11,
    year: "April 2024",
    title: "Concordia Middle School Yearbook Layout",
    subtitle: "Design Committee Member",
    description: "In this 'pandemic' year, our acquaintance and interaction started from the computer screen. Whether it was the change in class formats or going online, every experience during this special period gradually became an unforgettable part of our lives.\n\nThe square grids imitate us taking classes on Google Classroom during the pandemic. We believe that when we look back in the future, we can share with others: 'Yes, this is how we took classes back then.'\n\nIn our class life, volleyball matches and various competitions are our common important memories. On the court, we cooperated with each other, encouraged each other, and tried our best for every point.\n\nVolleyball is also one of the most representative activities of our class. Both boys and girls were fully engaged. This shared participation and passion will become a precious memory in the future, carrying our youth and passion.",
    image: "https://i.meee.com.tw/dNU2jpw.png",
    extraImages: [
      "https://i.meee.com.tw/KrUlCXv.png",
      "https://i.meee.com.tw/yLcPl1t.png",
      "https://i.meee.com.tw/vEKzPK8.png"
    ],
    link: "https://drive.google.com/file/d/19dZfcURaNQtXtIvezqWdKadKmJTHO858/view?usp=sharing"
  },
  {
    id: 12,
    year: "January 2023",
    title: "Concordia Middle School Exam Blessing Large Banner",
    subtitle: "Design and Coordination Committee Member",
    description: "This project took the theme of exam blessing activities, continuing campus traditions while trying to present blessings in innovative ways. Through the design of a giant vertical poster, the blessing could be displayed on campus for a long time, becoming a public installation with a visual focus.\n\nThe design combined illustrations and dynamic composition to convey encouragement and support for 12th-grade students. During the production process, from planning and design to output and installation, I fully experienced the practical process, ensuring work quality by communicating with vendors and solving problems.\n\nThe poster was successfully exhibited, not only increasing event participation but also becoming an important symbol of continuing campus culture.",
    image: "https://i.meee.com.tw/YJEbUyI.png",
    link: "https://drive.google.com/file/d/1LVQqK--jXdHArm9dmA5Zp73mHf-Nxgyq/view?usp=sharing",
    imageAspect: "aspect-[1/2] md:aspect-[1/2]"
  },
  {
    id: 13,
    year: "March 2023",
    title: "NTNU Design Camp Creative Style Poster",
    subtitle: "Visual Creativity and Layout Design",
    description: "This project was a sign design completed during the National Taiwan Normal University Design Camp. The prompt required combining 'American Burger' and 'Japanese Manga' styles to build a highly recognizable brand visual.\n\nWe used Japanese manga as the main visual language, breaking down the burger ingredients and 'stacking them layer by layer'. Through exaggerated composition and storyboard arrangements, we created strong dynamic flow and visual tension. At the same time, we used common manga screentones, speed lines, and sound effect words, with black and white as the main body matched with red accents.\n\nThis design successfully demonstrated the rich layers of the burger through cross-cultural visual fusion, establishing a brand image full of personality.",
    image: "https://i.meee.com.tw/Cdr7NtE.png",
    imageAspect: "aspect-[3/4]",
    certificate: "https://i.meee.com.tw/HJvzEVs.png",
    certificateText: "View Certificate"
  }
];
