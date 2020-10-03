import md5 from "md5";

export const defaultState = {
  // session: {
  //   authenticated: false
  // },
  users: [
    {
      id: "U1",
      name: "Dev",
      passwordHash: md5("dev")
    },
    {
      id: "U2",
      name: "Foo",
      passwordHash: md5("dev")
    },
    {
      id: "U3",
      name: "Baz",
      passwordHash: md5("dev")
    }
  ],
  groups: [
    {
      name: "To Do",
      id: "G1",
      owner: "U1"
    },
    {
      name: "Doing",
      id: "G2",
      owner: "U2"
    },
    {
      name: "Done",
      id: "G3",
      owner: "U3"
    }
  ],
  tasks: [
    {
      name: "Do tests",
      id: "T1",
      group: "G1",
      owner: "U1",
      isComplete: false
    },
    {
      name: "Take out Garbage",
      id: "T2",
      group: "G2",
      owner: "U2",
      isComplete: false
    },
    {
      name: "Was Dishes",
      id: "T3",
      group: "G3",
      owner: "U3",
      isComplete: false
    },
    {
      name: "Do tests",
      id: "T4",
      group: "G1",
      owner: "U1",
      isComplete: false
    }
  ],
  comments: [
    {
      owner: "U1",
      id: "C1",
      task: "T1",
      content: "Great work!!"
    },
    {
      owner: "U1",
      id: "C1",
      task: "T1",
      content: "Great work Again!!"
    },
    {
      owner: "U1",
      id: "C1",
      task: "T1",
      content: "Great work Again and Again!!"
    }
  ]
};
