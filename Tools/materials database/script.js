function lookupMaterialProperties() {
    var material = document.getElementById("material").value;
    var properties = getMaterialProperties(material);
    displayMaterialProperties(material, properties);
  }
  
  function getMaterialProperties(material) {
    var properties = {};
  
    // Add properties for all 100 materials here
    if (material === "alloy") {
        properties.youngsModulus = "Varies";
        properties.density = "Varies";
        properties.tensileStrength = "Varies";
        properties.thermalConductivity = "Varies";
        properties.imageSrc = "./element imgs/alloy.jpg";
        properties.chemicalProperties = {
          atomicNumber: "Varies",
          symbol: "Varies",
          atomicMass: "Varies",
          electronConfiguration: "Varies"
          // Add more chemical properties as needed
        };
      } else if (material === "aluminum") {
        properties.youngsModulus = "70 GPa";
        properties.density = "2700 kg/m^3";
        properties.tensileStrength = "270 MPa";
        properties.thermalConductivity = "237 W/m·K";
        properties.imageSrc = "./element imgs/aluminum.jpg";
        properties.chemicalProperties = {
          atomicNumber: 13,
          symbol: "Al",
          atomicMass: "26.98 g/mol",
          electronConfiguration: "[Ne] 3s2 3p1"
          // Add more chemical properties as needed
        };
      } else if (material === "arsenic") {
        properties.youngsModulus = "Varies";
        properties.density = "5.727 g/cm^3";
        properties.tensileStrength = "Varies";
        properties.thermalConductivity = "Varies";
        properties.imageSrc = "./element imgs/arsenic.jpg";
        properties.chemicalProperties = {
          atomicNumber: 33,
          symbol: "As",
          atomicMass: "74.92 g/mol",
          electronConfiguration: "[Ar] 3d10 4s2 4p3"
          // Add more chemical properties as needed
        };
      } else if (material === "barium") {
        properties.youngsModulus = "13 GPa";
        properties.density = "3.51 g/cm^3";
        properties.tensileStrength = "Varies";
        properties.thermalConductivity = "18.4 W/m·K";
        properties.imageSrc = "./element imgs/barium.jpg";
        properties.chemicalProperties = {
          atomicNumber: 56,
          symbol: "Ba",
          atomicMass: "137.33 g/mol",
          electronConfiguration: "[Xe] 6s2"
          // Add more chemical properties as needed
        };
        } else if (material === "beryllium") {
            properties.youngsModulus = "287 GPa";
            properties.density = "1848 kg/m^3";
            properties.tensileStrength = "345 MPa";
            properties.thermalConductivity = "200 W/m·K";
            properties.imageSrc = "beryllium.jpg";
            properties.chemicalProperties = {
              atomicNumber: 4,
              symbol: "Be",
              atomicMass: "9.01 g/mol",
              electronConfiguration: "1s2 2s2"
              // Add more chemical properties as needed
            };
          } else if (material === "bismuth") {
            properties.youngsModulus = "32 GPa";
            properties.density = "9780 kg/m^3";
            properties.tensileStrength = "18 MPa";
            properties.thermalConductivity = "7.97 W/m·K";
            properties.imageSrc = "bismuth.jpg";
            properties.chemicalProperties = {
              atomicNumber: 83,
              symbol: "Bi",
              atomicMass: "208.98 g/mol",
              electronConfiguration: "[Xe] 4f14 5d10 6s2 6p3"
              // Add more chemical properties as needed
            };
          } else if (material === "boron") {
            properties.youngsModulus = "400 GPa";
            properties.density = "2460 kg/m^3";
            properties.tensileStrength = "27-62 MPa";
            properties.thermalConductivity = "27 W/m·K";
            properties.imageSrc = "boron.jpg";
            properties.chemicalProperties = {
              atomicNumber: 5,
              symbol: "B",
              atomicMass: "10.81 g/mol",
              electronConfiguration: "1s2 2s2 2p1"
              // Add more chemical properties as needed
            };
          } else if (material === "cadmium") {
            properties.youngsModulus = "50 GPa";
            properties.density = "8650 kg/m^3";
            properties.tensileStrength = "205 MPa";
            properties.thermalConductivity = "96.6 W/m·K";
            properties.imageSrc = "cadmium.jpg";
            properties.chemicalProperties = {
              atomicNumber: 48,
              symbol: "Cd",
              atomicMass: "112.41 g/mol",
              electronConfiguration: "[Kr] 4d10 5s2"
              // Add more chemical properties as needed
            };
          // Continue adding properties for the remaining materials
          
        } else if (material === "calcium") {
            properties.youngsModulus = "20 GPa";
            properties.density = "1550 kg/m^3";
            properties.tensileStrength = "MPa";
            properties.thermalConductivity = "195 W/m·K";
            properties.imageSrc = "calcium.jpg";
            properties.chemicalProperties = {
              atomicNumber: 20,
              symbol: "Ca",
              atomicMass: "40.08 g/mol",
              electronConfiguration: "[Ar] 4s2"
              // Add more chemical properties as needed
            };
          } else if (material === "carbon") {
            properties.youngsModulus = "450-1050 GPa";
            properties.density = "Varies";
            properties.tensileStrength = "Varies";
            properties.thermalConductivity = "Varies";
            properties.imageSrc = "carbon.jpg";
            properties.chemicalProperties = {
              atomicNumber: 6,
              symbol: "C",
              atomicMass: "12.01 g/mol",
              electronConfiguration: "1s2 2s2 2p2"
              // Add more chemical properties as needed
            };
          } else if (material === "cesium") {
            properties.youngsModulus = "1.7 GPa";
            properties.density = "1873 kg/m^3";
            properties.tensileStrength = "Varies";
            properties.thermalConductivity = "36.8 W/m·K";
            properties.imageSrc = "cesium.jpg";
            properties.chemicalProperties = {
              atomicNumber: 55,
              symbol: "Cs",
              atomicMass: "132.91 g/mol",
              electronConfiguration: "[Xe] 6s1"
              // Add more chemical properties as needed
            };
          } else if (material === "chromium") {
            properties.youngsModulus = "279 GPa";
            properties.density = "7190 kg/m^3";
            properties.tensileStrength = "586 MPa";
            properties.thermalConductivity = "93.9 W/m·K";
            properties.imageSrc = "chromium.jpg";
            properties.chemicalProperties = {
              atomicNumber: 24,
              symbol: "Cr",
              atomicMass: "51.99 g/mol",
              electronConfiguration: "[Ar] 3d5 4s1"
              // Add more chemical properties as needed
            };
              } else if (material === "cobalt") {
                properties.youngsModulus = "209 GPa";
                properties.density = "8900 kg/m^3";
                properties.tensileStrength = "700-1500 MPa";
                properties.thermalConductivity = "100 W/m·K";
                properties.imageSrc = "cobalt.jpg";
                properties.chemicalProperties = {
                  atomicNumber: 27,
                  symbol: "Co",
                  atomicMass: "58.93 g/mol",
                  electronConfiguration: "[Ar] 3d7 4s2"
                  // Add more chemical properties as needed
                };
              } else if (material === "copper") {
                properties.youngsModulus = "110 GPa";
                properties.density = "8900 kg/m^3";
                properties.tensileStrength = "210 MPa";
                properties.thermalConductivity = "401 W/m·K";
                properties.imageSrc = "copper.jpg";
                properties.chemicalProperties = {
                  atomicNumber: 29,
                  symbol: "Cu",
                  atomicMass: "63.55 g/mol",
                  electronConfiguration: "[Ar] 3d10 4s1"
                  // Add more chemical properties as needed
                };
              } else if (material === "dysprosium") {
                properties.youngsModulus = "65 GPa";
                properties.density = "8550 kg/m^3";
                properties.tensileStrength = "Varies";
                properties.thermalConductivity = "10.7 W/m·K";
                properties.imageSrc = "dysprosium.jpg";
                properties.chemicalProperties = {
                  atomicNumber: 66,
                  symbol: "Dy",
                  atomicMass: "162.5 g/mol",
                  electronConfiguration: "[Xe] 4f10 6s2"
                  // Add more chemical properties as needed
                };
              } else if (material === "erbium") {
                properties.youngsModulus = "69 GPa";
                properties.density = "9066 kg/m^3";
                properties.tensileStrength = "Varies";
                properties.thermalConductivity = "14.5 W/m·K";
                properties.imageSrc = "erbium.jpg";
                properties.chemicalProperties = {
                  atomicNumber: 68,
                  symbol: "Er",
                  atomicMass: "167.26 g/mol",
                  electronConfiguration: "[Xe] 4f12 6s2"
                  // Add more chemical properties as needed
                };
            } else if (material === "fluorine") {
                    properties.youngsModulus = "8.4 GPa";
                    properties.density = "1.7 kg/m^3";
                    properties.tensileStrength = "MPa";
                    properties.thermalConductivity = "0.025 W/m·K";
                    properties.imageSrc = "fluorine.jpg";
                    properties.chemicalProperties = {
                      atomicNumber: 9,
                      symbol: "F",
                      atomicMass: "18.998 g/mol",
                      electronConfiguration: "1s2 2s2 2p5"
                      // Add more chemical properties as needed
                    };
                  } else if (material === "gadolinium") {
                    properties.youngsModulus = "54 GPa";
                    properties.density = "7900 kg/m^3";
                    properties.tensileStrength = "Varies";
                    properties.thermalConductivity = "10.6 W/m·K";
                    properties.imageSrc = "gadolinium.jpg";
                    properties.chemicalProperties = {
                      atomicNumber: 64,
                      symbol: "Gd",
                      atomicMass: "157.25 g/mol",
                      electronConfiguration: "[Xe] 4f7 5d1 6s2"
                      // Add more chemical properties as needed
                    };
                  } else if (material === "germanium") {
                    properties.youngsModulus = "103 GPa";
                    properties.density = "5323 kg/m^3";
                    properties.tensileStrength = "Varies";
                    properties.thermalConductivity = "60.2 W/m·K";
                    properties.imageSrc = "germanium.jpg";
                    properties.chemicalProperties = {
                      atomicNumber: 32,
                      symbol: "Ge",
                      atomicMass: "72.63 g/mol",
                      electronConfiguration: "[Ar] 3d10 4s2 4p2"
                      // Add more chemical properties as needed
                    };
                  } else if (material === "gold") {
                    properties.youngsModulus = "78 GPa";
                    properties.density = "19320 kg/m^3";
                    properties.tensileStrength = "124 MPa";
                    properties.thermalConductivity = "318 W/m·K";
                    properties.imageSrc = "./element imgs/gold.jpg";
                    properties.chemicalProperties = {
                      atomicNumber: 79,
                      symbol: "Au",
                      atomicMass: "196.97 g/mol",
                      electronConfiguration: "[Xe] 4f14 5d10 6s1"
                      // Add more chemical properties as needed
                    };
                } else if (material === "hafnium") {
                        properties.youngsModulus = "78 GPa";
                        properties.density = "13310 kg/m^3";
                        properties.tensileStrength = "485 MPa";
                        properties.thermalConductivity = "23 W/m·K";
                        properties.imageSrc = "hafnium.jpg";
                        properties.chemicalProperties = {
                          atomicNumber: 72,
                          symbol: "Hf",
                          atomicMass: "178.49 g/mol",
                          electronConfiguration: "[Xe] 4f14 5d2 6s2"
                          // Add more chemical properties as needed
                        };
                      } else if (material === "helium") {
                        properties.youngsModulus = "Varies";
                        properties.density = "0.1786 kg/m^3";
                        properties.tensileStrength = "MPa";
                        properties.thermalConductivity = "0.1513 W/m·K";
                        properties.imageSrc = "helium.jpg";
                        properties.chemicalProperties = {
                          atomicNumber: 2,
                          symbol: "He",
                          atomicMass: "4.0026 g/mol",
                          electronConfiguration: "1s2"
                          // Add more chemical properties as needed
                        };
                      } else if (material === "hydrogen") {
                        properties.youngsModulus = "Varies";
                        properties.density = "0.08988 kg/m^3";
                        properties.tensileStrength = "MPa";
                        properties.thermalConductivity = "0.1805 W/m·K";
                        properties.imageSrc = "hydrogen.jpg";
                        properties.chemicalProperties = {
                          atomicNumber: 1,
                          symbol: "H",
                          atomicMass: "1.008 g/mol",
                          electronConfiguration: "1s1"
                          // Add more chemical properties as needed
                        };
                      } else if (material === "indium") {
                        properties.youngsModulus = "11 GPa";
                        properties.density = "7310 kg/m^3";
                        properties.tensileStrength = "MPa";
                        properties.thermalConductivity = "81.8 W/m·K";
                        properties.imageSrc = "indium.jpg";
                        properties.chemicalProperties = {
                          atomicNumber: 49,
                          symbol: "In",
                          atomicMass: "114.82 g/mol",
                          electronConfiguration: "[Kr] 4d10 5s2 5p1"
                          // Add more chemical properties as needed
                        };
                    } else if (material === "iodine") {
                            properties.youngsModulus = "11 GPa";
                            properties.density = "4940 kg/m^3";
                            properties.tensileStrength = "MPa";
                            properties.thermalConductivity = "0.449 W/m·K";
                            properties.imageSrc = "iodine.jpg";
                            properties.chemicalProperties = {
                              atomicNumber: 53,
                              symbol: "I",
                              atomicMass: "126.9 g/mol",
                              electronConfiguration: "[Kr] 4d10 5s2 5p5"
                              // Add more chemical properties as needed
                            };
                          } else if (material === "iridium") {
                            properties.youngsModulus = "528 GPa";
                            properties.density = "22650 kg/m^3";
                            properties.tensileStrength = "1010 MPa";
                            properties.thermalConductivity = "147 W/m·K";
                            properties.imageSrc = "iridium.jpg";
                            properties.chemicalProperties = {
                              atomicNumber: 77,
                              symbol: "Ir",
                              atomicMass: "192.2 g/mol",
                              electronConfiguration: "[Xe] 4f14 5d7 6s2"
                              // Add more chemical properties as needed
                            };
                          } else if (material === "iron") {
                            properties.youngsModulus = "211 GPa";
                            properties.density = "7850 kg/m^3";
                            properties.tensileStrength = "370-540 MPa";
                            properties.thermalConductivity = "80.2 W/m·K";
                            properties.imageSrc = "iron.jpg";
                            properties.chemicalProperties = {
                              atomicNumber: 26,
                              symbol: "Fe",
                              atomicMass: "55.85 g/mol",
                              electronConfiguration: "[Ar] 3d6 4s2"
                              // Add more chemical properties as needed
                            };
                          } else if (material === "krypton") {
                            properties.youngsModulus = "unknown";
                            properties.density = "3.749 kg/m^3";
                            properties.tensileStrength = "unknown";
                            properties.thermalConductivity = "9.43 W/m·K";
                            properties.imageSrc = "krypton.jpg";
                            properties.chemicalProperties = {
                              atomicNumber: 36,
                              symbol: "Kr",
                              atomicMass: "83.8 g/mol",
                              electronConfiguration: "[Ar] 3d10 4s2 4p6"
                              // Add more chemical properties as needed
                            };
                         } else if (material === "lanthanum") {
                                properties.youngsModulus = "36 GPa";
                                properties.density = "6146 kg/m^3";
                                properties.tensileStrength = "Varies";
                                properties.thermalConductivity = "13.4 W/m·K";
                                properties.imageSrc = "lanthanum.jpg";
                                properties.chemicalProperties = {
                                  atomicNumber: 57,
                                  symbol: "La",
                                  atomicMass: "138.91 g/mol",
                                  electronConfiguration: "[Xe] 5d1 6s2"
                                  // Add more chemical properties as needed
                                };
                              } else if (material === "lead") {
                                properties.youngsModulus = "16 GPa";
                                properties.density = "11340 kg/m^3";
                                properties.tensileStrength = "MPa";
                                properties.thermalConductivity = "35.3 W/m·K";
                                properties.imageSrc = "lead.jpg";
                                properties.chemicalProperties = {
                                  atomicNumber: 82,
                                  symbol: "Pb",
                                  atomicMass: "207.2 g/mol",
                                  electronConfiguration: "[Xe] 4f14 5d10 6s2 6p2"
                                  // Add more chemical properties as needed
                                };
                              } else if (material === "lithium") {
                                properties.youngsModulus = "4.9 GPa";
                                properties.density = "535 kg/m^3";
                                properties.tensileStrength = "MPa";
                                properties.thermalConductivity = "84.8 W/m·K";
                                properties.imageSrc = "lithium.jpg";
                                properties.chemicalProperties = {
                                  atomicNumber: 3,
                                  symbol: "Li",
                                  atomicMass: "6.94 g/mol",
                                  electronConfiguration: "1s2 2s1"
                                  // Add more chemical properties as needed
                                };
                              } else if (material === "magnesium") {
                                properties.youngsModulus = "45 GPa";
                                properties.density = "1738 kg/m^3";
                                properties.tensileStrength = "MPa";
                                properties.thermalConductivity = "156 W/m·K";
                                properties.imageSrc = "magnesium.jpg";
                                properties.chemicalProperties = {
                                  atomicNumber: 12,
                                  symbol: "Mg",
                                  atomicMass: "24.31 g/mol",
                                  electronConfiguration: "[Ne] 3s2"
                                  // Add more chemical properties as needed
                                };
                            } else if (material === "mercury") {
                                    properties.youngsModulus = "14 GPa";
                                    properties.density = "13534 kg/m^3";
                                    properties.tensileStrength = "Varies";
                                    properties.thermalConductivity = "8.3 W/m·K";
                                    properties.imageSrc = "mercury.jpg";
                                    properties.chemicalProperties = {
                                      atomicNumber: 80,
                                      symbol: "Hg",
                                      atomicMass: "200.59 g/mol",
                                      electronConfiguration: "[Xe] 4f14 5d10 6s2"
                                      // Add more chemical properties as needed
                                    };
                                  } else if (material === "neodymium") {
                                    properties.youngsModulus = "50 GPa";
                                    properties.density = "7000 kg/m^3";
                                    properties.tensileStrength = "Varies";
                                    properties.thermalConductivity = "16.5 W/m·K";
                                    properties.imageSrc = "neodymium.jpg";
                                    properties.chemicalProperties = {
                                      atomicNumber: 60,
                                      symbol: "Nd",
                                      atomicMass: "144.24 g/mol",
                                      electronConfiguration: "[Xe] 4f4 6s2"
                                      // Add more chemical properties as needed
                                    };
                                  } else if (material === "neon") {
                                    properties.youngsModulus = "Varies";
                                    properties.density = "0.9002 kg/m^3";
                                    properties.tensileStrength = "MPa";
                                    properties.thermalConductivity = "0.0491 W/m·K";
                                    properties.imageSrc = "neon.jpg";
                                    properties.chemicalProperties = {
                                      atomicNumber: 10,
                                      symbol: "Ne",
                                      atomicMass: "20.18 g/mol",
                                      electronConfiguration: "1s2 2s2 2p6"
                                      // Add more chemical properties as needed
                                    };
                                  } else if (material === "nickel") {
                                    properties.youngsModulus = "200 GPa";
                                    properties.density = "8908 kg/m^3";
                                    properties.tensileStrength = "MPa";
                                    properties.thermalConductivity = "90.9 W/m·K";
                                    properties.imageSrc = "nickel.jpg";
                                    properties.chemicalProperties = {
                                      atomicNumber: 28,
                                      symbol: "Ni",
                                      atomicMass: "58.69 g/mol",
                                      electronConfiguration: "[Ar] 3d8 4s2"
                                      // Add more chemical properties as needed
                                    };
                                } else if (material === "niobium") {
                                        properties.youngsModulus = "105 GPa";
                                        properties.density = "8570 kg/m^3";
                                        properties.tensileStrength = "275 MPa";
                                        properties.thermalConductivity = "53.7 W/m·K";
                                        properties.imageSrc = "niobium.jpg";
                                        properties.chemicalProperties = {
                                          atomicNumber: 41,
                                          symbol: "Nb",
                                          atomicMass: "92.91 g/mol",
                                          electronConfiguration: "[Kr] 4d4 5s1"
                                          // Add more chemical properties as needed
                                        };
                                      } else if (material === "nitrogen") {
                                        properties.youngsModulus = "unknown";
                                        properties.density = "1.251 kg/m^3";
                                        properties.tensileStrength = "unknown";
                                        properties.thermalConductivity = "0.0259 W/m·K";
                                        properties.imageSrc = "nitrogen.jpg";
                                        properties.chemicalProperties = {
                                          atomicNumber: 7,
                                          symbol: "N",
                                          atomicMass: "14.01 g/mol",
                                          electronConfiguration: "1s2 2s2 2p3"
                                          // Add more chemical properties as needed
                                        };
                                      } else if (material === "osmium") {
                                        properties.youngsModulus = "525 GPa";
                                        properties.density = "22610 kg/m^3";
                                        properties.tensileStrength = "Varies";
                                        properties.thermalConductivity = "87.6 W/m·K";
                                        properties.imageSrc = "osmium.jpg";
                                        properties.chemicalProperties = {
                                          atomicNumber: 76,
                                          symbol: "Os",
                                          atomicMass: "190.23 g/mol",
                                          electronConfiguration: "[Xe] 4f14 5d6 6s2"
                                          // Add more chemical properties as needed
                                        };
                                      } else if (material === "oxygen") {
                                        properties.youngsModulus = "unknown";
                                        properties.density = "1.429 kg/m^3";
                                        properties.tensileStrength = "unknown";
                                        properties.thermalConductivity = "0.0263 W/m·K";
                                        properties.imageSrc = "oxygen.jpg";
                                        properties.chemicalProperties = {
                                          atomicNumber: 8,
                                          symbol: "O",
                                          atomicMass: "15.999 g/mol",
                                          electronConfiguration: "1s2 2s2 2p4"
                                          // Add more chemical properties as needed
                                        };
                                    } else if (material === "palladium") {
                                            properties.youngsModulus = "121 GPa";
                                            properties.density = "12023 kg/m^3";
                                            properties.tensileStrength = "MPa";
                                            properties.thermalConductivity = "71.8 W/m·K";
                                            properties.imageSrc = "palladium.jpg";
                                            properties.chemicalProperties = {
                                              atomicNumber: 46,
                                              symbol: "Pd",
                                              atomicMass: "106.42 g/mol",
                                              electronConfiguration: "[Kr] 4d10"
                                              // Add more chemical properties as needed
                                            };
                                          } else if (material === "phosphorus") {
                                            properties.youngsModulus = "unknown";
                                            properties.density = "1.82 kg/m^3";
                                            properties.tensileStrength = "unknown";
                                            properties.thermalConductivity = "0.023 W/m·K";
                                            properties.imageSrc = "phosphorus.jpg";
                                            properties.chemicalProperties = {
                                              atomicNumber: 15,
                                              symbol: "P",
                                              atomicMass: "30.97 g/mol",
                                              electronConfiguration: "1s2 2s2 2p6 3s2 3p3"
                                              // Add more chemical properties as needed
                                            };
                                          } else if (material === "platinum") {
                                            properties.youngsModulus = "168 GPa";
                                            properties.density = "21450 kg/m^3";
                                            properties.tensileStrength = "MPa";
                                            properties.thermalConductivity = "71.6 W/m·K";
                                            properties.imageSrc = "platinum.jpg";
                                            properties.chemicalProperties = {
                                              atomicNumber: 78,
                                              symbol: "Pt",
                                              atomicMass: "195.08 g/mol",
                                              electronConfiguration: "[Xe] 4f14 5d9 6s1"
                                              // Add more chemical properties as needed
                                            };
                                          } else if (material === "potassium") {
                                            properties.youngsModulus = "3.53 GPa";
                                            properties.density = "862 kg/m^3";
                                            properties.tensileStrength = "MPa";
                                            properties.thermalConductivity = "102 W/m·K";
                                            properties.imageSrc = "potassium.jpg";
                                            properties.chemicalProperties = {
                                              atomicNumber: 19,
                                              symbol: "K",
                                              atomicMass: "39.1 g/mol",
                                              electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s1"
                                              // Add more chemical properties as needed
                                            };
                                        } else if (material === "praseodymium") {
                                                properties.youngsModulus = "37 GPa";
                                                properties.density = "6640 kg/m^3";
                                                properties.tensileStrength = "MPa";
                                                properties.thermalConductivity = "13.9 W/m·K";
                                                properties.imageSrc = "praseodymium.jpg";
                                                properties.chemicalProperties = {
                                                  atomicNumber: 59,
                                                  symbol: "Pr",
                                                  atomicMass: "140.91 g/mol",
                                                  electronConfiguration: "[Xe] 4f3 6s2"
                                                  // Add more chemical properties as needed
                                                };
                                              } else if (material === "promethium") {
                                                properties.youngsModulus = "unknown";
                                                properties.density = "unknown";
                                                properties.tensileStrength = "unknown";
                                                properties.thermalConductivity = "unknown";
                                                properties.imageSrc = "promethium.jpg";
                                                properties.chemicalProperties = {
                                                  atomicNumber: 61,
                                                  symbol: "Pm",
                                                  atomicMass: "144.91 g/mol",
                                                  electronConfiguration: "[Xe] 4f5 6s2"
                                                  // Add more chemical properties as needed
                                                };
                                              } else if (material === "silver") {
                                                properties.youngsModulus = "83 GPa";
                                                properties.density = "10500 kg/m^3";
                                                properties.tensileStrength = "MPa";
                                                properties.thermalConductivity = "429 W/m·K";
                                                properties.imageSrc = "silver.jpg";
                                                properties.chemicalProperties = {
                                                  atomicNumber: 47,
                                                  symbol: "Ag",
                                                  atomicMass: "107.87 g/mol",
                                                  electronConfiguration: "[Kr] 4d10 5s1"
                                                  // Add more chemical properties as needed
                                                };
                                              } else if (material === "sodium") {
                                                properties.youngsModulus = "10 GPa";
                                                properties.density = "970 kg/m^3";
                                                properties.tensileStrength = "MPa";
                                                properties.thermalConductivity = "142 W/m·K";
                                                properties.imageSrc = "sodium.jpg";
                                                properties.chemicalProperties = {
                                                  atomicNumber: 11,
                                                  symbol: "Na",
                                                  atomicMass: "22.99 g/mol",
                                                  electronConfiguration: "1s2 2s2 2p6 3s1"
                                                  // Add more chemical properties as needed
                                                };
                                            } else if (material === "strontium") {
                                                    properties.youngsModulus = "15 GPa";
                                                    properties.density = "2540 kg/m^3";
                                                    properties.tensileStrength = "MPa";
                                                    properties.thermalConductivity = "35.4 W/m·K";
                                                    properties.imageSrc = "strontium.jpg";
                                                    properties.chemicalProperties = {
                                                      atomicNumber: 38,
                                                      symbol: "Sr",
                                                      atomicMass: "87.62 g/mol",
                                                      electronConfiguration: "[Kr] 5s2"
                                                      // Add more chemical properties as needed
                                                    };
                                                  } else if (material === "sulfur") {
                                                    properties.youngsModulus = "unknown";
                                                    properties.density = "2.07 kg/m^3";
                                                    properties.tensileStrength = "unknown";
                                                    properties.thermalConductivity = "0.0023 W/m·K";
                                                    properties.imageSrc = "sulfur.jpg";
                                                    properties.chemicalProperties = {
                                                      atomicNumber: 16,
                                                      symbol: "S",
                                                      atomicMass: "32.06 g/mol",
                                                      electronConfiguration: "1s2 2s2 2p6 3s2 3p4"
                                                      // Add more chemical properties as needed
                                                    };
                                                  } else if (material === "tantalum") {
                                                    properties.youngsModulus = "186 GPa";
                                                    properties.density = "16650 kg/m^3";
                                                    properties.tensileStrength = "MPa";
                                                    properties.thermalConductivity = "57.5 W/m·K";
                                                    properties.imageSrc = "tantalum.jpg";
                                                    properties.chemicalProperties = {
                                                      atomicNumber: 73,
                                                      symbol: "Ta",
                                                      atomicMass: "180.95 g/mol",
                                                      electronConfiguration: "[Xe] 4f14 5d3 6s2"
                                                      // Add more chemical properties as needed
                                                    };
                                                  } else if (material === "technetium") {
                                                    properties.youngsModulus = "unknown";
                                                    properties.density = "11500 kg/m^3";
                                                    properties.tensileStrength = "unknown";
                                                    properties.thermalConductivity = "50.6 W/m·K";
                                                    properties.imageSrc = "technetium.jpg";
                                                    properties.chemicalProperties = {
                                                      atomicNumber: 43,
                                                      symbol: "Tc",
                                                      atomicMass: "98.91 g/mol",
                                                      electronConfiguration: "[Kr] 4d5 5s2"
                                                      // Add more chemical properties as needed
                                                    };
                                                } else if (material === "tellurium") {
                                                        properties.youngsModulus = "43 GPa";
                                                        properties.density = "6240 kg/m^3";
                                                        properties.tensileStrength = "MPa";
                                                        properties.thermalConductivity = "2.35 W/m·K";
                                                        properties.imageSrc = "tellurium.jpg";
                                                        properties.chemicalProperties = {
                                                          atomicNumber: 52,
                                                          symbol: "Te",
                                                          atomicMass: "127.6 g/mol",
                                                          electronConfiguration: "[Kr] 4d10 5s2 5p4"
                                                          // Add more chemical properties as needed
                                                        };
                                                      } else if (material === "terbium") {
                                                        properties.youngsModulus = "55 GPa";
                                                        properties.density = "8229 kg/m^3";
                                                        properties.tensileStrength = "MPa";
                                                        properties.thermalConductivity = "11.1 W/m·K";
                                                        properties.imageSrc = "terbium.jpg";
                                                        properties.chemicalProperties = {
                                                          atomicNumber: 65,
                                                          symbol: "Tb",
                                                          atomicMass: "158.93 g/mol",
                                                          electronConfiguration: "[Xe] 4f9 6s2"
                                                          // Add more chemical properties as needed
                                                        };
                                                      } else if (material === "thallium") {
                                                        properties.youngsModulus = "8 GPa";
                                                        properties.density = "11850 kg/m^3";
                                                        properties.tensileStrength = "MPa";
                                                        properties.thermalConductivity = "46.1 W/m·K";
                                                        properties.imageSrc = "thallium.jpg";
                                                        properties.chemicalProperties = {
                                                          atomicNumber: 81,
                                                          symbol: "Tl",
                                                          atomicMass: "204.38 g/mol",
                                                          electronConfiguration: "[Xe] 4f14 5d10 6s2 6p1"
                                                          // Add more chemical properties as needed
                                                        };
                                                      } else if (material === "thorium") {
                                                        properties.youngsModulus = "79 GPa";
                                                        properties.density = "11724 kg/m^3";
                                                        properties.tensileStrength = "MPa";
                                                        properties.thermalConductivity = "54.0 W/m·K";
                                                        properties.imageSrc = "thorium.jpg";
                                                        properties.chemicalProperties = {
                                                          atomicNumber: 90,
                                                          symbol: "Th",
                                                          atomicMass: "232.04 g/mol",
                                                          electronConfiguration: "[Rn] 6d2 7s2"
                                                          // Add more chemical properties as needed
                                                        };
                                                    } else if (material === "thulium") {
                                                            properties.youngsModulus = "44 GPa";
                                                            properties.density = "9320 kg/m^3";
                                                            properties.tensileStrength = "MPa";
                                                            properties.thermalConductivity = "16.9 W/m·K";
                                                            properties.imageSrc = "thulium.jpg";
                                                            properties.chemicalProperties = {
                                                              atomicNumber: 69,
                                                              symbol: "Tm",
                                                              atomicMass: "168.93 g/mol",
                                                              electronConfiguration: "[Xe] 4f13 6s2"
                                                              // Add more chemical properties as needed
                                                            };
                                                          } else if (material === "tin") {
                                                            properties.youngsModulus = "50 GPa";
                                                            properties.density = "7310 kg/m^3";
                                                            properties.tensileStrength = "MPa";
                                                            properties.thermalConductivity = "66.8 W/m·K";
                                                            properties.imageSrc = "tin.jpg";
                                                            properties.chemicalProperties = {
                                                              atomicNumber: 50,
                                                              symbol: "Sn",
                                                              atomicMass: "118.71 g/mol",
                                                              electronConfiguration: "[Kr] 4d10 5s2 5p2"
                                                              // Add more chemical properties as needed
                                                            };
                                                          } else if (material === "titanium") {
                                                            properties.youngsModulus = "116 GPa";
                                                            properties.density = "4500 kg/m^3";
                                                            properties.tensileStrength = "MPa";
                                                            properties.thermalConductivity = "21.9 W/m·K";
                                                            properties.imageSrc = "titanium.jpg";
                                                            properties.chemicalProperties = {
                                                              atomicNumber: 22,
                                                              symbol: "Ti",
                                                              atomicMass: "47.87 g/mol",
                                                              electronConfiguration: "[Ar] 3d2 4s2"
                                                              // Add more chemical properties as needed
                                                            };
                                                          } else if (material === "tungsten") {
                                                            properties.youngsModulus = "411 GPa";
                                                            properties.density = "19300 kg/m^3";
                                                            properties.tensileStrength = "MPa";
                                                            properties.thermalConductivity = "173 W/m·K";
                                                            properties.imageSrc = "tungsten.jpg";
                                                            properties.chemicalProperties = {
                                                              atomicNumber: 74,
                                                              symbol: "W",
                                                              atomicMass: "183.84 g/mol",
                                                              electronConfiguration: "[Xe] 4f14 5d4 6s2"
                                                              // Add more chemical properties as needed
                                                            };
                                                         } else if (material === "uranium") {
                                                                properties.youngsModulus = "208 GPa";
                                                                properties.density = "19100 kg/m^3";
                                                                properties.tensileStrength = "MPa";
                                                                properties.thermalConductivity = "27.6 W/m·K";
                                                                properties.imageSrc = "uranium.jpg";
                                                                properties.chemicalProperties = {
                                                                  atomicNumber: 92,
                                                                  symbol: "U",
                                                                  atomicMass: "238.03 g/mol",
                                                                  electronConfiguration: "[Rn] 5f3 6d1 7s2"
                                                                  // Add more chemical properties as needed
                                                                };
                                                              } else if (material === "vanadium") {
                                                                properties.youngsModulus = "128 GPa";
                                                                properties.density = "6100 kg/m^3";
                                                                properties.tensileStrength = "MPa";
                                                                properties.thermalConductivity = "30.7 W/m·K";
                                                                properties.imageSrc = "vanadium.jpg";
                                                                properties.chemicalProperties = {
                                                                  atomicNumber: 23,
                                                                  symbol: "V",
                                                                  atomicMass: "50.94 g/mol",
                                                                  electronConfiguration: "[Ar] 3d3 4s2"
                                                                  // Add more chemical properties as needed
                                                                };
                                                              } else if (material === "xenon") {
                                                                properties.youngsModulus = "unknown";
                                                                properties.density = "5.89 kg/m^3";
                                                                properties.tensileStrength = "unknown";
                                                                properties.thermalConductivity = "0.00565 W/m·K";
                                                                properties.imageSrc = "xenon.jpg";
                                                                properties.chemicalProperties = {
                                                                  atomicNumber: 54,
                                                                  symbol: "Xe",
                                                                  atomicMass: "131.29 g/mol",
                                                                  electronConfiguration: "[Kr] 4d10 5s2 5p6"
                                                                  // Add more chemical properties as needed
                                                                };
                                                              } else if (material === "ytterbium") {
                                                                properties.youngsModulus = "23 GPa";
                                                                properties.density = "6570 kg/m^3";
                                                                properties.tensileStrength = "MPa";
                                                                properties.thermalConductivity = "38.0 W/m·K";
                                                                properties.imageSrc = "ytterbium.jpg";
                                                                properties.chemicalProperties = {
                                                                  atomicNumber: 70,
                                                                  symbol: "Yb",
                                                                  atomicMass: "173.04 g/mol",
                                                                  electronConfiguration: "[Xe] 4f14 6s2"
                                                                  // Add more chemical properties as needed
                                                                };
                                                            } else if (material === "yttrium") {
                                                                    properties.youngsModulus = "63 GPa";
                                                                    properties.density = "4472 kg/m^3";
                                                                    properties.tensileStrength = "MPa";
                                                                    properties.thermalConductivity = "17.2 W/m·K";
                                                                    properties.imageSrc = "yttrium.jpg";
                                                                    properties.chemicalProperties = {
                                                                      atomicNumber: 39,
                                                                      symbol: "Y",
                                                                      atomicMass: "88.91 g/mol",
                                                                      electronConfiguration: "[Kr] 4d1 5s2"
                                                                      // Add more chemical properties as needed
                                                                    };
                                                                  } else if (material === "zinc") {
                                                                    properties.youngsModulus = "108 GPa";
                                                                    properties.density = "7130 kg/m^3";
                                                                    properties.tensileStrength = "MPa";
                                                                    properties.thermalConductivity = "116 W/m·K";
                                                                    properties.imageSrc = "zinc.jpg";
                                                                    properties.chemicalProperties = {
                                                                      atomicNumber: 30,
                                                                      symbol: "Zn",
                                                                      atomicMass: "65.38 g/mol",
                                                                      electronConfiguration: "[Ar] 3d10 4s2"
                                                                      // Add more chemical properties as needed
                                                                    };
                                                                  } else if (material === "zirconium") {
                                                                    properties.youngsModulus = "88 GPa";
                                                                    properties.density = "6511 kg/m^3";
                                                                    properties.tensileStrength = "MPa";
                                                                    properties.thermalConductivity = "22.7 W/m·K";
                                                                    properties.imageSrc = "zirconium.jpg";
                                                                    properties.chemicalProperties = {
                                                                      atomicNumber: 40,
                                                                      symbol: "Zr",
                                                                      atomicMass: "91.22 g/mol",
                                                                      electronConfiguration: "[Kr] 4d2 5s2"
                                                                      // Add more chemical properties as needed
                                                                    };
                                                                } else if (material === "radium") {
                                                                    properties.youngsModulus = "unknown";
                                                                    properties.density = "5000 kg/m^3";
                                                                    properties.tensileStrength = "unknown";
                                                                    properties.thermalConductivity = "18 W/m·K";
                                                                    properties.imageSrc = "radium.jpg";
                                                                    properties.chemicalProperties = {
                                                                      atomicNumber: 88,
                                                                      symbol: "Ra",
                                                                      atomicMass: "226.03 g/mol",
                                                                      electronConfiguration: "[Rn] 7s2"
                                                                      // Add more chemical properties as needed
                                                                    };                                                                                                                            

              }
        return properties;
        }
  
  function displayMaterialProperties(material, properties) {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Clear previous results
    resultDiv.innerHTML += "<h2>Material: " + material + "</h2>";
    resultDiv.innerHTML += "<strong>Youth's Modulus:</strong> " + properties.youngsModulus + "<br>";
    resultDiv.innerHTML += "<strong>Density:</strong> " + properties.density + "<br>";
    resultDiv.innerHTML += "<strong>Tensile Strength:</strong> " + properties.tensileStrength + "<br>";
    resultDiv.innerHTML += "<strong>Thermal Conductivity:</strong> " + properties.thermalConductivity + "<br>";
  
    if (properties.chemicalProperties) {
      resultDiv.innerHTML += "<strong>Atomic Number:</strong> " + properties.chemicalProperties.atomicNumber + "<br>";
      resultDiv.innerHTML += "<strong>Symbol:</strong> " + properties.chemicalProperties.symbol + "<br>";
      resultDiv.innerHTML += "<strong>Atomic Mass:</strong> " + properties.chemicalProperties.atomicMass + "<br>";
      resultDiv.innerHTML += "<strong>Electron Configuration:</strong> " + properties.chemicalProperties.electronConfiguration + "<br>";
      // Add more chemical properties as needed
    }
    if (properties.imageSrc) {
        resultDiv.innerHTML += "<strong></strong> <br>";
        resultDiv.innerHTML += "<img src='" + properties.imageSrc + "' style='width: 300px; height: auto;'><br>";
      }
    // Display more properties as needed
  }
  
  