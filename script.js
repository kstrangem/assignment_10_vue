

    const rockCollection = 
        [{
          rank:1,
          name: "onyx",
          color: "black",
          transparency: "none",
          description: "Onyx is a gemstone found in various regions of the world including Yemen, Uruguay, Argentina, Australia, Brazil, Canada, China, Czech Republic, Germany, India, Indonesia, Madagascar, Latin America, the UK, and various states in the US."
        }

        {
          rank:2,
          name: "rose quartz",
          color: "rose",
          transparency: "translucent",
          description: "Quartz is a mineral composed of silicon and oxygen atoms in a continuous framework of SiO4 silicon–oxygen tetrahedra, with each oxygen being shared between two tetrahedra, giving an overall chemical formula of SiO2. Quartz is the second most abundant mineral in Earth's continental crust, behind feldspar."
        }
        {
          rank:3,
          name: "geode",
          color: "neutral",
          transparency: "none",
          description: "Geodes are geological secondary formation within sedimentary and volcanic rocks. Geodes are hollow, vaguely circular rocks, in which masses of mineral matter are secluded. "
        }
        {
          rank:4,
          name: "indigo grabro",
          color: "indigo",
          transparency: "none",
          description: "Indigo Gabbro is a relatively new crystal mined in Madagascar and in various locations in Alaska. It has an amazing array of colors from light indigo purple to black. “Gabbro” refers to a large group of dark, coarse-grained mafic, or igneous rock, formed of silicate [SiO2, or quartz] that is rich in magnesium and iron."
        }
        {
          rank:5,
          name: "sodalite",
          color: "blue",
          transparency: "none",
          description: "Sodalite is a rich royal blue tectosilicate mineral widely used as an ornamental gemstone. Although massive sodalite samples are opaque, crystals are usually transparent to translucent. Sodalite is a member of the sodalite group with hauyne, nosean, lazurite and tugtupite "
    }];
     
     var myVue = new Vue ({
        el:"#myRocks",
        data: {
          isActive:true,
          rocks:rockCollection,
          }
        });