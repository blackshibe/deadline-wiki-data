local HttpService = game:GetService("HttpService")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local data = {}

for _, class in pairs(ReplicatedStorage.attachments:GetChildren()) do
	if class:IsA("Folder") then
		local class_data = require(class.classData)
		data[class.Name] = class_data
		data[class.Name].attachments = {}

		for _, attachment in pairs(class:GetChildren()) do
			if attachment:IsA("Model") then
				local properties = require(attachment.properties)
				data[class.Name].attachments[attachment.Name] = properties
			end
		end
	end
end

print(HttpService:JSONEncode(_removeCyclic(data)))
