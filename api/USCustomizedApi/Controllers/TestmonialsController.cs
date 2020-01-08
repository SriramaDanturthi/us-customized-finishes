using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using USCustomizedApi.Models;

namespace USCustomizedApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class TestmonialsController : ControllerBase
  { 
    public IEnumerable<TestMonialModel> GetTestMonials()
    {
        return new List<TestMonialModel>
        {
            new TestMonialModel{
              Id = 1,
              Author = "Dan G",
              State = "Georgia",
              Message = "We have been using US Customized for over 7 years for our doors, drawer faces, and trim. Their quality, customer service and responsiveness is what keeps them as our Go To supplier. Thanks for all you do!"
            },
            new TestMonialModel{
              Id =  2,
              Author =  "TOM Z",
              State =  "Georgia",
              Message =  "We have developed a great partnership over the years with U.S. Customized Finishes. We have a demand for specialty custom parts and you guys have always rose to the challenge of producing in a timely manner and providing the quality required in our industry. Whether it is check in kiosks for doctors’ offices or jet bridge kiosks for airlines you guys have come through with the right product…you guys rock!"
            },
            new TestMonialModel{
              Id =  3,
              Author =  "DICK G",
              State =  "Pennslvania",
              Message =  "We've used US Customized for many years for panels and doors and have always been very happy with the quality of their work. Recently we needed to install raised panels to match existing profiles that wrapped around an elliptical arch. We did the templating and US Customized did the panels - perfectly. Everything couldn't have gone more smoothly and our clients were thrilled."
            },
            new TestMonialModel{
              Id =  4,
              Author =  "M D B",
              State =  "Georgia",
              Message =  "Perfect customer support, high quality workmanship, great pricing, a nice group of dedicated people."
            },
            new TestMonialModel{
              Id =  5,
              Author =  "Beverly G",
              State =  "North Carolina",
              Message =  "I have been ordering cabinet doors from US Customized Finishes for 12 years, and the doors installed 12 years ago are still in great condition! The quality, cost, and customer service is outstanding and can’t be beat! They go above and beyond to assist in our requests for new style doors, hardware, and rush shipments. To be able to deal with the manufacturer one on one with no ‘middle man’ is priceless.  I have had other suppliers try to compete, but in the end they fall short in every category."
            },
            new TestMonialModel{
              Id =  6,
              Author =  "AI R",
              State =  "New Jersey",
              Message =  "My company has been in business since 1995. US Customized Finishes has been there since day one. Great prices! Great service! GREAT PEOPLE!! Stop here if you've been looking for a door supplier; they're the BEST."
            },
            new TestMonialModel{
              Id =  7,
              Author =  "Rodney H",
              State =  "North Carolina",
              Message =  "US Customized Finishes supplies us with our cabinet doors. We truly value the commitment and great service that US Customized Finishes offers. It's nice to have dependable working relationships with manufacturers so that we can deliver quality products to our clients."
            },
            new TestMonialModel{
              Id =  8,
              Author =  "Chris H",
              State =  "Georgia",
              Message =  "We rehab apartment homes and have been using cabinet doors from US Customized Finishes since 2004. We have purchased many thousands of doors during that time and have consistently seen exceptional quality, service and pricing. We still manage many of those properties and never have a problem with the doors. The staff is outstanding."
            },
            new TestMonialModel{
              Id =  9,
              Author =  "Jeff W",
              State =  "Massachusetts",
              Message =  "For the last 9 years, US Customized Finishes has been providing me with quality cabinet doors. I can't say enough about the people. They stand behind their products 100% and have been a pleasure to do business with."
            },
            new TestMonialModel{
              Id =  10,
              Author =  "",
              State =  "",
              Message =  "As a cabinet manufacturer of 'cabinets  for every room of the home' we appreciate the service and response time from US Customized. We have purchased hundreds of their quality doors and especially appreciate the fine service and personal support we have received."
            },
            new TestMonialModel{
              Id =  11,
              Author =  "",
              State =  "",
              Message =  "For the past four years US Customized Finishes has provided our custom closet business with doors, drawer fronts and moldings. The quality of their products combined with their friendly customer service team make US Customized Finishes our choice for thermofoil."
            }
        };
    }
  }
}
