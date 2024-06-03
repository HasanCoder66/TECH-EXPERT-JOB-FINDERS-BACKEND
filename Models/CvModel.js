import { Schema } from "mongoose";
import mongoose from "mongoose";
const cvSchema = Schema(
  {
    userId: {
      type: String,
      // required:true,
    },
    templateId: {
      type: String,
      // required:true,
    },
    profileData: {
      title: {
        type: String,
        // required: true,
      },
      firstName: {
        type: String,
        // required: true,
      },
      middleName: {
        type: String,
      },
      lastName: {
        type: String,
        // required: true,
      },
      gender: {
        type: String,
        // required: true,
        default: "select",
      },
      marital: {
        type: String,
        // required: true,
        default: "select",
      },
      profession: {
        type: String,
        // required: true,
      },
      streetAddress: {
        type: String,
        // required: true,
      },
      city: {
        type: String,
        // required: true,
      },
      dob: {
        type: String,
      },
      state: {
        type: String,
        // required: true,
      },
      nationality: {
        type: String,
        // required: true,
        default: "select",
      },
      passportNo: {
        type: Number,
      },
      mobNum: {
        type: Number,
        // required: true,
      },
      email: {
        type: String,
        // required: true,
      },
    },
    experienceData: {
      jobTitle: {
        type: String,
      },
      employer: {
        type: String,
      },
      expCity: {
        type: String,
      },
      expState: {
        type: String,
      },
      startDate: {
        type: String,
      },
      endData: {
        type: String,
      },
      responsibilities: {
        type: String,
      },
    },
    educationData: {
      schoolName: {
        type: String,
      },
      schoolCity: {
        type: String,
      },
      schoolState: {
        type: String,
      },
      lastQualification: {
        type: String,
        // required: true,
        default: "select",
      },
      fieldOfStudy: {
        type: String,
      },
      educationStartDate: {
        type: String,
      },
      endEducationDate: {
        type: String,
      },
    },

    skills: {
      type: [
        {
          skill: {
            type: String,
          },
          level: {
            type: String,
            default: "Select",
          },
        },
      ],
    },
    summary: {
      type: String,
    },
    // Hobbies: {
    //   type: [
    //     {
    //       HobbiesInterest: {
    //         type: String,
    //       },
    //     },
    //   ],
    // },

    // image: {
    //   type: String,
    // },
    fbUserName: {
      type: String,
    },
    twitterUserName: {
      type: String,
    },
    linkedinUserName: {
      type: String,
    },
    websiteLink: {
      type: String,
    },

    // refereesName: {
    //   type: String,
    // },
    // refereesLastName: {
    //   type: String,
    // },
    // position: {
    //   type: String,
    // },
    // email: {
    //   type: String,
    // },
    // phone: {
    //   type: Number,
    // },
    // companyNameOrganization: {
    //   type: String,
    // },
    // relationShip: {
    //   type: String,
    // },

    // software: {
    //   type: [
    //     {
    //       software: {
    //         type: String,
    //       },
    //       level: {
    //         type: String,
    //         enum: [
    //           "Novice",
    //           "Beginners",
    //           "Intermediate",
    //           "Proficient",
    //           "Expert",
    //           "Select",
    //         ],
    //         default: "Select",
    //       },
    //     },
    //   ],
    // },

    languages: {
      type: [
        {
          language: {
            type: String,
          },
          level: {
            type: String,
            default: "Select",
          },
        },
      ],
    },

    certificates: {
      type: [
        {
          certificate: {
            type: String,
          },
          year: {
            type: String,
          },
        },
      ],
    },
    // awards: {
    //   type: String,
    // },
    // publication: {
    //   type: String,
    // },
    // affiliations: {
    //   type: String,
    // },
    // accomplishments: {
    //   type: String,
    // },
    // additionalInfo: {
    //   type: String,
    // },

    // others: {
    //   type: {
    //     title: {
    //       type: String,
    //     },
    //     otherInfo: {
    //       type: String,
    //     },
    //   },
    // },
  },
  { timestamps: true }
);

export default mongoose.model("Cv", cvSchema);
