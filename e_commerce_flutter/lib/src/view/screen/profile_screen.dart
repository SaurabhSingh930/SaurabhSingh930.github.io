import 'package:flutter/material.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Expanded(child: CircleAvatar(
            radius: 180,
            backgroundImage: AssetImage('assets/images/profile_pic.jpg'),
          ),
          ),
          const Text(
            "Hello Saurabh!",
            style: TextStyle(fontWeight: FontWeight.bold, fontSize: 25),
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Image.asset('assets/images/github.png', width: 60),
              const SizedBox(width: 10),
              const Text(
                "https://github.com/SaurabhSingh930",
                style: TextStyle(fontSize: 20),
              )
            ],
          )
        ],
      ),
    );
  }
}
