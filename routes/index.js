/**
 * Copyright 2016, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const express = require('express');
const router = express.Router();

// [START hello_world]

router.get('/_ah/health', (req, res) => {
  res.render('index', {
    title: 'Health Check'
  });
});

router.get('/', (req, res) => {
  let url ="http://www.zombo.com";
  let body = "You can do anything...";
  res.writeHead(302, {
    'Location': url,
    'Content-Length': body.length,
    'Content-Type': 'text/plain'
  });
  res.end(body);
});
// [END hello_world]


module.exports = router;
